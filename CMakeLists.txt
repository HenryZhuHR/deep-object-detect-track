cmake_minimum_required (VERSION 3.10)


# Enable CMAKE_<LANG>_COMPILER_ID AppleClang
if(POLICY CMP0025)
    cmake_policy(SET CMP0025 NEW)
endif()

project(infer)

set (CMAKE_CXX_STANDARD 17)
set (CMAKE_CXX_EXTENSIONS OFF)
set (CMAKE_CXX_STANDARD_REQUIRED ON)
set (CMAKE_EXPORT_COMPILE_COMMANDS ON)

option(WITH_OPENVINO "Build with OpenVINO" OFF)
option(WITH_ONNXRUNTIME "Build with ONNXRUNTIME" OFF)
option(WITH_TENSORRT "Build with TensorRT" ON)


find_package(OpenCV REQUIRED)
if(OpenCV_FOUND)
    message(STATUS "OpenCV found")
    message(STATUS "    directory: ${OpenCV_DIR}")
    message(STATUS "    version  : ${OpenCV_VERSION}")
    include_directories(${OpenCV_INCLUDE_DIRS})
    link_directories(${OpenCV_LIB_DIRS})
else()
    message(FATAL_ERROR "OpenCV not found")
endif()

set(SOURCES src/empty.cpp )
if (WITH_OPENVINO)
    add_compile_definitions(WITH_OPENVINO)
    find_package(OpenVINO REQUIRED COMPONENTS Runtime) # only Runtime component
    if (OpenVINO_FOUND)
        message(STATUS "OpenVINO found")
        message(STATUS "    directory: ${OpenVINO_DIR}")
        message(STATUS "    version  : ${OpenVINO_VERSION}")
        set(ov_link_libraries openvino::runtime)
        include_directories($ENV{INTEL_OPENVINO_DIR}/runtime/include)
        # include_directories($ENV{OpenVINO_HOME}/runtime/include)

        list(APPEND SOURCES 
            src/backend/b_openvino.cpp
        )
    else()
        message(FATAL_ERROR "OpenVINO not found")
    endif()
endif()


include_directories(include)


add_library(backend SHARED ${SOURCES})


set(EXE_FILE infer)
add_executable(${EXE_FILE} app/infer.cpp)
target_link_libraries(${EXE_FILE} PRIVATE ${ov_link_libraries} ${OpenCV_LIBS} backend)

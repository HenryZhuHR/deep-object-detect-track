import{_ as s,c as i,o as a,a1 as e}from"./chunks/framework.BMAahRQD.js";const F=JSON.parse('{"title":"安装环境","description":"","frontmatter":{"lastUpdated":true,"editLink":true,"footer":true,"outline":"deep"},"headers":[],"relativePath":"install.md","filePath":"install.md","lastUpdated":1717762479000}'),t={name:"install.md"},l=e(`<h1 id="安装环境" tabindex="-1">安装环境 <a class="header-anchor" href="#安装环境" aria-label="Permalink to &quot;安装环境&quot;">​</a></h1><h2 id="获取代码" tabindex="-1">获取代码 <a class="header-anchor" href="#获取代码" aria-label="Permalink to &quot;获取代码&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ms4ya" id="tab-_XIKR8w" checked="checked"><label for="tab-_XIKR8w">SSH(Recommend)</label><input type="radio" name="group-ms4ya" id="tab-xdBzei_"><label for="tab-xdBzei_">HTTP</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 需要配置 github 上的 SSH key</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:HenryZhuHR/deep-object-detect-track.git</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/HenryZhuHR/deep-object-detect-track.git</span></span></code></pre></div></div></div><p>进入项目目录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deep-object-detect-track</span></span></code></pre></div><blockquote><p>后续的脚本基于 <code>deep-object-detect-track</code> 目录下执行</p></blockquote><p>如果未能获取子模块，可以手动获取，如果 <code>git submodule</code> 无法获取，可以使用 <code>git clone</code> 获取</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aqeB2" id="tab-MCHxIVa" checked="checked"><label for="tab-MCHxIVa">git submodule</label><input type="radio" name="group-aqeB2" id="tab-P5izC-1"><label for="tab-P5izC-1">git clone</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># in deep-object-detect-track directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ultralytics/yolov5.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> projects/yolov5</span></span></code></pre></div></div></div><h2 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-label="Permalink to &quot;系统要求&quot;">​</a></h2><h3 id="操作系统" tabindex="-1">操作系统 <a class="header-anchor" href="#操作系统" aria-label="Permalink to &quot;操作系统&quot;">​</a></h3><p>项目在 Linux(Ubuntu) 和 MacOS 系统并经过测试 ，经过测试的系统：</p><ul><li>✅ Ubuntu 22.04 jammy (CPU &amp; GPU)</li><li>✅ MacOS (CPU)</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>项目不支持 Windows 系统 ❌ ，如果需要在 Windows 系统上运行，可以使用 WSL2 或者根据提供的脚本手动执行；虽然已经测试通过，但是不保证所有功能都能正常运行，因此不接受 Windows 系统的问题反馈</p></div><h3 id="gpu" tabindex="-1">GPU <a class="header-anchor" href="#gpu" aria-label="Permalink to &quot;GPU&quot;">​</a></h3><p>如果需要使用 GPU 训练模型，需要安装 CUDA Toolkit，可以参考 <a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noreferrer">CUDA Toolkit Archive</a> 下载对应版本的 CUDA Toolkit，具体下载的版本需要参考 <a href="https://pytorch.org/get-started/locally/" target="_blank" rel="noreferrer"><em>INSTALL PYTORCH</em></a></p><p>例如 Pytorch 2.3.0 支持 CUDA 11.8/12.1，因此安装 CUDA 11.8/12.1 即可，而不需要过高的 CUDA 版本，安装后需要配置环境变量</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CUDA_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CUDA_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/local/cuda-\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CUDA_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$CUDA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LD_LIBRARY_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$CUDA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/lib64:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$LD_LIBRARY_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><blockquote><p>事实上，Pytorch 1.8 开始就会在安装的时候自动安装对应的 CUDA Toolkit，因此不需要手动安装 CUDA Toolkit，因此可以跳过这一步</p></blockquote><p>MacOS 系统不支持 CUDA Toolkit，可以使用 CPU 训练模型 (Yolov5 项目暂不支持 MPS 训练)，但是推理过程可以使用 Metal ，参考 <a href="https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/#getting-started" target="_blank" rel="noreferrer"><em>Introducing Accelerated PyTorch Training on Mac</em></a> 和 <a href="https://pytorch.org/docs/stable/notes/mps.html#mps-backend" target="_blank" rel="noreferrer"><em>MPS backend</em></a></p><h2 id="安装环境-1" tabindex="-1">安装环境 <a class="header-anchor" href="#安装环境-1" aria-label="Permalink to &quot;安装环境&quot;">​</a></h2><p>这里安装的环境指的是需要训练的环境，如果不需要训练而是直接部署，请转至 「<a href="./deploy.html">模型部署</a>」 文档</p><p>可以使用 venv 或 conda 创建虚拟环境</p><ul><li><strong>venv</strong> : 嵌入式设备的部署建议使用这种方案，以确保链接到系统的库，如果没有安装，请安装</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GZG1B" id="tab-lmBs2Oh" checked="checked"><label for="tab-lmBs2Oh">Linux</label><input type="radio" name="group-GZG1B" id="tab-EC5qeB6"><label for="tab-EC5qeB6">MacOS</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-pip</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Mac 貌似自带了 python3-venv</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># brew install python3-venv python3-pip</span></span></code></pre></div></div></div><ul><li><strong>conda</strong> : 如果没有安装，请从 <a href="https://docs.anaconda.com/free/miniconda/index.html" target="_blank" rel="noreferrer">Miniconda</a> 下载，或者快速安装</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cWAaB" id="tab-T_0CR5g" checked="checked"><label for="tab-T_0CR5g">linux x64</label><input type="radio" name="group-cWAaB" id="tab-KnjJDDV"><label for="tab-KnjJDDV">MacOS arm64</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda3-latest-Linux-x86_64.sh</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda3-latest-MacOSX-arm64.sh</span></span></code></pre></div></div></div><p>创建虚拟环境</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hF7Al" id="tab-XVBF1XL" checked="checked"><label for="tab-XVBF1XL">venv (推荐)</label><input type="radio" name="group-hF7Al" id="tab-OZ7UCv2"><label for="tab-OZ7UCv2">项目内 conda (推荐)</label><input type="radio" name="group-hF7Al" id="tab-rmOt__U"><label for="tab-rmOt__U">全局 conda</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env/deep-object-detect-track</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env/deep-object-detect-track/bin/activate</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env/deep-object-detect-track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./.env/deep-object-detect-track</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deep-object-detect-track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deep-object-detect-track</span></span></code></pre></div></div></div><blockquote><p>Python 版本选择 3.10 是因为 Ubuntu 22.04 默认安装的 Python 版本是 3.10</p></blockquote><p>安装依赖，其中包含了 <a href="https://pytorch.org/get-started/locally/" target="_blank" rel="noreferrer">PyTorch</a> 以及 yolov5 项目依赖</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div>`,31),n=[l];function p(h,d,k,o,c,r){return a(),i("div",null,n)}const u=s(t,[["render",p]]);export{F as __pageData,u as default};

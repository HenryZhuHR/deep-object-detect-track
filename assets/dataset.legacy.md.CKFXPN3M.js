import{_ as s,a,b as i}from"./chunks/labelImg-rect-3.CpXWU20D.js";import{_ as t,c as e,o as l,a1 as n}from"./chunks/framework.BMAahRQD.js";const u=JSON.parse('{"title":"目标检测数据集制作","description":"","frontmatter":{"lastUpdated":true,"editLink":true,"footer":true,"outline":"deep"},"headers":[],"relativePath":"dataset.legacy.md","filePath":"dataset.legacy.md","lastUpdated":1717229937000}'),h={name:"dataset.legacy.md"},p=n(`<h1 id="目标检测数据集制作" tabindex="-1">目标检测数据集制作 <a class="header-anchor" href="#目标检测数据集制作" aria-label="Permalink to &quot;目标检测数据集制作&quot;">​</a></h1><h2 id="图片收集" tabindex="-1">图片收集 <a class="header-anchor" href="#图片收集" aria-label="Permalink to &quot;图片收集&quot;">​</a></h2><h2 id="启动标注工具" tabindex="-1">启动标注工具 <a class="header-anchor" href="#启动标注工具" aria-label="Permalink to &quot;启动标注工具&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements/requirements.train.txt</span></span></code></pre></div><p>这是一个目标检测预处理的说明，事实上这个版本已经用了很多年了，比较老了，</p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><ul><li>[x] VOC -&gt; yolo</li><li>[x] <a href="#yolo-to-coco">yolo -&gt; coco</a>: 转化为 COCO 数据集用于 <a href="https://github.com/ultralytics/yolov5" target="_blank" rel="noreferrer">ultralytics/yolov5</a> 项目</li></ul><h2 id="数据集制作" tabindex="-1">数据集制作 <a class="header-anchor" href="#数据集制作" aria-label="Permalink to &quot;数据集制作&quot;">​</a></h2><blockquote><p>需要说明的是，脚本只能按照标注进行分类的数据进行处理，如果一张图片有多个标注，是无法处理的<br> 该项目仅仅是脚本库，不包括数据集</p></blockquote><h3 id="数据采集与归档" tabindex="-1">数据采集与归档 <a class="header-anchor" href="#数据采集与归档" aria-label="Permalink to &quot;数据采集与归档&quot;">​</a></h3><p>将采集到的数据放置在 <code>dataset-custom/src</code> 目录下面，并且按照类别归档至对应文件夹下，参考的文件目如下</p><p>数据集目录结构如下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">·</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objdect-dataset</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 数据集目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 原始数据，按照类别进行归档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> A</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 类别 A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> B</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> labeled</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 压缩、重命名后的文件，在这里进行标注</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VOC</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # VOC 标准数据集，用于训练</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coco</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # coco 标准数据集，用于训练</span></span></code></pre></div><blockquote><p><code>labeled</code> 目录是用于后续步骤<a href="#数据标注">数据标注</a>的目录，这样我们可以在不破坏原始数据对情况下完成数据处理，如果不再需要原始数据，在完成此步骤后，可以删除 <code>src</code> 目录</p></blockquote><p>数据集的图片的大小不能太大，需要预先压缩尺寸，执行 <code>objdet_dataset_processor/resize.py</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objdet_dataset_processor/resize.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--dataset-path] [--height] [--is_rename]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># example</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objdet_dataset_processor/resize.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/data/objdect-dataset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --is_rename</span></span></code></pre></div><h3 id="数据标注" tabindex="-1">数据标注 <a class="header-anchor" href="#数据标注" aria-label="Permalink to &quot;数据标注&quot;">​</a></h3><p>在前面步骤中生成的 <code>labeled</code> 目录是用于数据标注的目录，选择图像注释工具 labelImg 进行标注。</p><p><a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noreferrer">labelImg</a> 是 Python 编写、基于 Qt 图形界面的软件，标注以 PASCAL VOC 格式（ImageNet 使用的格式）另存为 <code>.xml</code> 文件。此外，它还支持 YOLO 格式。</p><p>你可以通过从<a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noreferrer">源码编译</a>的方式安装，也可以通过 pip3 快速安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> labelImg</span></span></code></pre></div><p>安装后，可以在命令行启动</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">labelImg</span></span></code></pre></div><p>在 Ubuntu 下启动后的界面如下（Windows 版本可能略有差异） <img src="`+s+'" alt="start"></p><ul><li>打开文件 : 标注单张图像（不推荐使用）</li><li><strong>打开目录</strong> : 打开数据集存放的目录，目录下应该是图像的位置</li><li><strong>改变存放目录</strong>: 标注文件 <code>.xml</code> 存放的目录</li><li>下一个图片:</li><li>上一个图像:</li><li><strong>验证图像</strong>: 验证标记无误，用于全部数据集标记完成后的检查工作</li><li><strong>保存</strong>: 保存标记结果，快捷键 <code>Ctrl+s</code></li><li><strong>数据集格式</strong>: <code>PascalVOC</code> 和 <code>YOLO</code> 可选，一般选择 <code>PascalVOC</code> 即可，需要 <code>YOLO</code> 可以之后进行转换</li></ul><p>点击 <code>创建区块</code> 创建一个矩形框，画出范围 <img src="'+a+'" alt="rect"></p><p>每个类别都有对应的颜色加以区分 <img src="'+i+`" alt="rect"></p><p>完成一张图片的标注后，点击 <code>下一个图片</code></p><ul><li>labelImg 快捷键</li></ul><table><thead><tr><th style="text-align:center;">快捷键</th><th style="text-align:center;">功能</th><th style="text-align:center;">快捷键</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">Ctrl+u</td><td style="text-align:center;">从目录加载所有图像</td><td style="text-align:center;">w</td><td style="text-align:center;">创建一个矩形框</td></tr><tr><td style="text-align:center;">Ctrl+R</td><td style="text-align:center;">更改默认注释目标目录</td><td style="text-align:center;">d</td><td style="text-align:center;">下一张图片</td></tr><tr><td style="text-align:center;">Ctrl+s</td><td style="text-align:center;">保存当前标注结果</td><td style="text-align:center;">a</td><td style="text-align:center;">上一张图片</td></tr><tr><td style="text-align:center;">Ctrl+d</td><td style="text-align:center;">复制当前标签和矩形框</td><td style="text-align:center;">del</td><td style="text-align:center;">删除选定的矩形框</td></tr><tr><td style="text-align:center;">space</td><td style="text-align:center;">将当前图像标记为已验证</td><td style="text-align:center;">Ctrl+</td><td style="text-align:center;">放大</td></tr><tr><td style="text-align:center;">↑→↓←</td><td style="text-align:center;">键盘箭头移动选定的矩形框</td><td style="text-align:center;">Ctrl–</td><td style="text-align:center;">缩小</td></tr></tbody></table><h2 id="数据集预处理" tabindex="-1">数据集预处理 <a class="header-anchor" href="#数据集预处理" aria-label="Permalink to &quot;数据集预处理&quot;">​</a></h2><h3 id="转换至可训练的标准数据集" tabindex="-1">转换至可训练的标准数据集 <a class="header-anchor" href="#转换至可训练的标准数据集" aria-label="Permalink to &quot;转换至可训练的标准数据集&quot;">​</a></h3><p>当标注完成后，我们就需要将图像和标注文件转换为我们所需要的数据格式</p><p>可用的转换流程如下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">labeled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VOC</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # to PASCAL VOC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            └─&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> YOLO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> COCO</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # to YOLOv5 COCO</span></span></code></pre></div><ul><li>[x] <a href="#转换成-VOC-格式">转换成 VOC 格式</a></li><li>[x] <a href="#转换成用于-YOLOv5-的-COCO-格式">转换成用于 YOLOv5 的 COCO 格式</a></li></ul><h4 id="转换成-voc-格式" tabindex="-1">转换成 VOC 格式 <a class="header-anchor" href="#转换成-voc-格式" aria-label="Permalink to &quot;转换成 VOC 格式&quot;">​</a></h4><p>转换成 VOC 数据集流程如下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">labeled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VOC</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # to PASCAL VOC</span></span></code></pre></div><p>执行 <code>labeled-voc.py</code> 将已经标记好的数据集转化成VOC格式</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts/dataset/labeled-voc.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--dataset-path] [--height] [--is_rename]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># example</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts/dataset/labeled-voc.py</span></span></code></pre></div><p>运行后会在 VOC 目录下类别文件 <code>classes.names</code> 和训练集文件 <code>train.txt</code> 、验证集文件 <code>val.txt</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">·</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dataset-custom</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 数据集文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 原始数据，按照类别进行归档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> labeled</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 压缩、重命名后的文件，在这里进行标注</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VOC</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # VOC 标准数据集，用于训练</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Annotations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ImageSets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> classes.names</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> train.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> val.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JPEGImages</span></span></code></pre></div><h4 id="转换成用于-yolov5-的-coco-格式" tabindex="-1">转换成用于 YOLOv5 的 COCO 格式 <a class="header-anchor" href="#转换成用于-yolov5-的-coco-格式" aria-label="Permalink to &quot;转换成用于 YOLOv5 的 COCO 格式&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VOC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> YOLO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> COCO</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # to YOLOv5 COCO</span></span></code></pre></div><p>执行 <code>voc-yolo.py</code> 将数据集从 VOC 转换成 YOLO</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts/dataset/voc-yolo.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--conf]</span></span></code></pre></div><p>执行 <code>yolo-coco.py</code> 将数据集从 YOLO 转换成 COCO (yolov5)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts/dataset/yolo-coco.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--conf]</span></span></code></pre></div><p>运行后得到 YOLOv5 的 COCO 数据集，包含 <code>images</code>,<code>labels</code> 目录，目录下分别包含子目录 <code>train</code>,<code>val</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">·</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dataset-custom</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 数据集文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 原始数据，按照类别进行归档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> labeled</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 压缩、重命名后的文件，在这里进行标注</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coco</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # coco 数据集，用于训练</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> train</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> val</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> labels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> train</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> val</span></span></code></pre></div><h2 id="相关仓库" tabindex="-1">相关仓库 <a class="header-anchor" href="#相关仓库" aria-label="Permalink to &quot;相关仓库&quot;">​</a></h2><ul><li><a href="https://github.com/tzutalin/labelImg" target="_blank" rel="noreferrer">labelImg</a>: 用于目标检测数据的图像标注软件</li></ul>`,53),k=[p];function d(r,c,o,g,F,y){return l(),e("div",null,k)}const B=t(h,[["render",d]]);export{u as __pageData,B as default};

import{_ as s,c as p,a5 as o,G as n,B as i,o as r}from"./chunks/framework.O9ad3XaM.js";const l="/assets/2-1.X7vJ-ihV.png",c="/assets/2-2.DDuA-3Ko.png",d="/assets/2-3.B1Tbw2VT.png",h="/assets/2-4.BELThDsB.png",m="/assets/2-5.D2sHSr-_.png",b="/assets/2-6.CKIQ4gts.png",g="/assets/2-7.DPEh8fgg.png",a="/assets/2-8.BwZiohMN.png",u="/assets/2-9.BsCFv52H.png",_="/assets/2-10.CnMq3qeg.png",k="/assets/2-11.C0Klod-i.png",x=JSON.parse('{"title":"EndStone 插件安装教程","description":"","frontmatter":{"title":"EndStone 插件安装教程","sidebar_position":1},"headers":[],"relativePath":"Bedrock/bds-core/process/EndStone/EndStone-plugins.md","filePath":"nitwikit/docs-bedrock/bds-core/process/EndStone/EndStone-plugins.md","lastUpdated":1733361016000}'),f={name:"Bedrock/bds-core/process/EndStone/EndStone-plugins.md"};function q(v,e,w,E,P,S){const t=i("nw-image-viewer");return r(),p("div",null,[e[0]||(e[0]=o('<h1 id="第一步、endstone插件来源" tabindex="-1">第一步、EndStone插件来源 <a class="header-anchor" href="#第一步、endstone插件来源" aria-label="Permalink to &quot;第一步、EndStone插件来源&quot;">​</a></h1><p>目前插件来源：</p><h3 id="minebbs论坛-发展国内基岩版社区的你敢说没有" tabindex="-1"><a href="https://www.minebbs.com/resources/categories/bdserver.38/" target="_blank" rel="noreferrer">MineBBS论坛</a>（发展国内基岩版社区的你敢说没有？） <a class="header-anchor" href="#minebbs论坛-发展国内基岩版社区的你敢说没有" aria-label="Permalink to &quot;[MineBBS论坛](https://www.minebbs.com/resources/categories/bdserver.38/)（发展国内基岩版社区的你敢说没有？）&quot;">​</a></h3><p><img src="'+l+'" alt="201"></p><h3 id="pip源-endstone绝大多数插件都在这里发布了" tabindex="-1"><a href="https://pypi.org/search/?q=endstone" target="_blank" rel="noreferrer">pip源</a> （EndStone绝大多数插件都在这里发布了） <a class="header-anchor" href="#pip源-endstone绝大多数插件都在这里发布了" aria-label="Permalink to &quot;[pip源](https://pypi.org/search/?q=endstone) （EndStone绝大多数插件都在这里发布了）&quot;">​</a></h3><p><img src="'+c+'" alt="202"></p><h3 id="bedrinth下载站-除了pip外另一个比较知名的下载源-网速较慢-不太推荐" tabindex="-1"><a href="https://bedrinth.com/?platform=endstone" target="_blank" rel="noreferrer">Bedrinth下载站</a> （除了pip外另一个比较知名的下载源，网速较慢，不太推荐） <a class="header-anchor" href="#bedrinth下载站-除了pip外另一个比较知名的下载源-网速较慢-不太推荐" aria-label="Permalink to &quot;[Bedrinth下载站](https://bedrinth.com/?platform=endstone) （除了pip外另一个比较知名的下载源，网速较慢，不太推荐）&quot;">​</a></h3><p><img src="'+d+'" alt="203"></p><h2 id="第二步、如何安装" tabindex="-1">第二步、如何安装？ <a class="header-anchor" href="#第二步、如何安装" aria-label="Permalink to &quot;第二步、如何安装？&quot;">​</a></h2><h3 id="单文件安装" tabindex="-1">单文件安装 <a class="header-anchor" href="#单文件安装" aria-label="Permalink to &quot;单文件安装&quot;">​</a></h3><p>如果你在 MineBBS 上下载，或者其他人给你的一个EndStone插件，请看这里</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>EndStone的插件一般文件是以 .whl 或者 .dll 为后缀的文件，有的插件作者为了易于分发或者安装插件会将上述内容和配置文件一起弄成压缩文件</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>附带：什么是whl文件：</p><p>whl格式本质上是一个压缩包，里面包含了py文件，以及经过编译的pyd文件。</p><p>可以在不具备编译环境的情况下，选择合适自己的Python环境进行安装。</p><p>说白了，whl 就是Python的压缩包。</p><p>常玩 Java 版的话，你可以理解为它是 <strong>Python版 的 .jar 文件</strong>，只是运行环境由 <em>Java</em> 改为 <em>Python</em>（可以这么想吧）</p></div><p><img src="'+h+'" alt="204"></p><h4 id="第一步、下载插件" tabindex="-1">第一步、下载插件 <a class="header-anchor" href="#第一步、下载插件" aria-label="Permalink to &quot;第一步、下载插件&quot;">​</a></h4><p>在MineBBS以及其他论坛或者QQ群等渠道下载的文件，你可能会获得</p><ul><li>whl 文件</li><li>或者 zip一类 压缩包</li></ul><p>压缩包请使用常用压缩软件打开备用</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>打开压缩包推荐使用BandiZIP、360压缩、7z或者WinRAR等专业压缩文件</p></div><h4 id="第二步、安装插件" tabindex="-1">第二步、安装插件 <a class="header-anchor" href="#第二步、安装插件" aria-label="Permalink to &quot;第二步、安装插件&quot;">​</a></h4><p>关闭服务器（<strong>别告诉我你不会，小心我【语言激动，已省略】</strong>）</p><h5 id="如果是-whl-文件" tabindex="-1">如果是 whl 文件 <a class="header-anchor" href="#如果是-whl-文件" aria-label="Permalink to &quot;如果是 whl 文件&quot;">​</a></h5><p>1、打开 bedrock_server 文件夹，你会惊奇的发现：什么时候多了个plugins文件夹？！！</p><p><img src="'+m+'" alt="205"></p><p>2、打开 plugins 文件夹，将下载的 whl 插件文件拽入该文件夹中</p><p>3、启动！当CMD显示插件名称时说明插件已加载成功！</p><p><img src="'+b+'" alt="206"></p><p>4、如果你真不知道如何辨别插件是否加载，请在后台输入 <code>plugins</code> 指令</p><p><img src="'+g+'" alt="207"></p><h5 id="如果是压缩包文件" tabindex="-1">如果是压缩包文件 <a class="header-anchor" href="#如果是压缩包文件" aria-label="Permalink to &quot;如果是压缩包文件&quot;">​</a></h5><p>比如下面这个赖皮家伙（不是）</p><p><img src="'+a+'" alt="208"></p><p>教你三招：</p><p>1、按下 CTRL + A 全选，复制压缩包内的所有文件</p><p>2、打开 bedrock_server\\plugins 后，粘贴</p><p>3、启动！享受插件便利！</p><p><img src="'+u+'" alt="209"></p><h5 id="插件配置" tabindex="-1">插件配置 <a class="header-anchor" href="#插件配置" aria-label="Permalink to &quot;插件配置&quot;">​</a></h5><p>有的会在下载的压缩文件中提前准备好</p><p><img src="'+a+'" alt="208"></p><p>有的会在启动一次服务器后自动生成</p><p><img src="'+_+'" alt="2010"></p><p>编辑他们很简单，打开相应插件的文件夹，然后使用 VSCode 或者 Nodepad-- 一类编辑器对插件进行配置</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>请注意插件配置的文件格式，并按照他们的规则去写！，如果插件有wiki一类请先看他们的wiki再编辑！</p></div><h3 id="pip安装" tabindex="-1">pip安装 <a class="header-anchor" href="#pip安装" aria-label="Permalink to &quot;pip安装&quot;">​</a></h3><p>在上面给的 pip渠道 上找到心仪的插件后，使用下面指令完成下载：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pip install 插件名</span></span></code></pre></div><p><img src="'+k+'" alt="2011"></p><p>然后重启服务器，插件会自动安装完毕啦~</p>',49)),n(t)])}const y=s(f,[["render",q]]);export{x as __pageData,y as default};
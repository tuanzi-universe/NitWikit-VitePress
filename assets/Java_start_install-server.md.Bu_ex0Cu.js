import{_ as a,c as r,a5 as t,o as s}from"./chunks/framework.O9ad3XaM.js";const o="/assets/1.CAsPecwU.png",i="/assets/2.DawCAlst.png",n="/assets/3.B-v-2NAJ.png",l="/assets/4.BtrHvIo9.png",k=JSON.parse('{"title":"安装 Mod 服务端","description":"","frontmatter":{"title":"安装 Mod 服务端","sidebar_position":3},"headers":[],"relativePath":"Java/start/install-server.md","filePath":"nitwikit/docs-java/start/install-server.md","lastUpdated":1730609404000}'),c={name:"Java/start/install-server.md"};function p(h,e,d,g,f,b){return s(),r("div",null,e[0]||(e[0]=[t('<h1 id="安装服务端" tabindex="-1">安装服务端 <a class="header-anchor" href="#安装服务端" aria-label="Permalink to &quot;安装服务端&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该教程是为<strong>纯 Mod 服</strong>所编写的，插件和混合直接新建文件夹扔进去就完事</p></div><p>全篇以 1.20.4 Mod 服务端安装为例子，如果看不懂可以使用<a href="https://dl.yizhan.wiki/windows-latest/select-server.exe" target="_blank" rel="noreferrer">笨蛋脚本</a> <strong>(目前不支持 Fabric)</strong></p><h2 id="forge" tabindex="-1">Forge <a class="header-anchor" href="#forge" aria-label="Permalink to &quot;Forge&quot;">​</a></h2><h3 id="installer-下载" tabindex="-1">Installer 下载 <a class="header-anchor" href="#installer-下载" aria-label="Permalink to &quot;Installer 下载&quot;">​</a></h3><p>首先，来到 <a href="https://files.minecraftforge.net/net/minecraftforge/forge/" target="_blank" rel="noreferrer">Forge 官方网站</a>或国内下载镜像 <a href="https://sync.mcsl.com.cn/core/Forge" target="_blank" rel="noreferrer">MCSL</a></p><p><img src="'+o+'" alt=""></p><p>在左边的 <code>Minecraft Version</code> 找到你需要的版本，然后点击。</p><p><img src="'+i+'" alt=""></p><p>请选择 <code>Installer</code> ，左边右边都无所谓，打开后，你会来到一个广告窗口，点击最上面的 <code>SKIP</code>(没有出现就等一会)</p><p><img src="'+n+'" alt=""></p><p>然后你就成功下载了 <code>Forge Installer</code>，由于 MC 的 eula 限制，我们需要去单独下载一个 <code>Minecraft server</code> 本体</p><h3 id="minecraft-server-下载" tabindex="-1">Minecraft server 下载 <a class="header-anchor" href="#minecraft-server-下载" aria-label="Permalink to &quot;Minecraft server 下载&quot;">​</a></h3><p>在浏览器中输入链接 <code>https://bmclapi2.bangbang93.com/version/这里填你的MC版本/server</code></p><p>比如 1.20.4 服务器应该是 <code>https://bmclapi2.bangbang93.com/version/1.20.4/server</code></p><p>下载下来后，你需要将文件重命名为 <code>minecraft_server.这里填你的MC版本.jar</code> ，</p><p>比如 1.20.4 服务器应该是 <code>minecraft_server.1.20.4.jar</code> ，现在你的目录应该长这样</p><p><img src="'+l+'" alt=""></p><h3 id="执行安装" tabindex="-1">执行安装 <a class="header-anchor" href="#执行安装" aria-label="Permalink to &quot;执行安装&quot;">​</a></h3><p>接着打开 cmd，不会请查看<a href="./launch-server#笨蛋脚本">开启 cmd</a>，输入以下命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forge-1.20.4-49.1.2-installer.jar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">这里请改成你下载的文件名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--installServer</span></span></code></pre></div><p>然后静待一会，直到控制台输出 <code>The server installed successfully</code> 就完成了!</p><h2 id="neoforge" tabindex="-1">NeoForge <a class="header-anchor" href="#neoforge" aria-label="Permalink to &quot;NeoForge&quot;">​</a></h2><p>与 Forge 差不多，官网换<a href="https://neoforged.net/" target="_blank" rel="noreferrer">NeoForge 官网</a></p><h2 id="fabric" tabindex="-1">Fabric <a class="header-anchor" href="#fabric" aria-label="Permalink to &quot;Fabric&quot;">​</a></h2><p>首先前往 Fabric 的<a href="https://fabricmc.net/" target="_blank" rel="noreferrer">官网</a>或者<a href="https://sync.mcsl.com.cn/core/Fabric" target="_blank" rel="noreferrer">下载镜像</a></p><p>然后点击中间那个蓝色的下载按钮，Fabric 有两种下载方案</p><h3 id="方法-1" tabindex="-1">方法 1 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法 1&quot;">​</a></h3><p>进入新页面后点击中间的蓝色下载按钮，此时你会下载一个安装器</p><p>点击 <strong>服务端</strong> 然后依次根据提示进行安装，注意选择空文件夹</p><p>全部选择完毕后点击安装，等待安装结束</p><p>结束后一定一定要点击 <strong>下载服务端</strong> 以便下载原版服务端(模组服务端都需要这玩意)，</p><p>如果你懒得配置启动脚本也可以点击 <strong>生成</strong> 按钮让它给你生成一个临时的。</p><h3 id="方法-2" tabindex="-1">方法 2 <a class="header-anchor" href="#方法-2" aria-label="Permalink to &quot;方法 2&quot;">​</a></h3><p>回到刚才的网页去点击下方的 <code>Minecraft Server</code></p><p>依次根据提示进行安装，或者使用底下的安装命令进行快捷安装(限 Linux 用户)</p><p>下载完成后拖进空文件夹，随后新建脚本文件将启动命令复制到同一文件夹下，</p><p>双击启动服务器，等待后续安装，出现 <code>Done</code> 等语句后视为安装成功</p>',38)]))}const u=a(c,[["render",p]]);export{k as __pageData,u as default};

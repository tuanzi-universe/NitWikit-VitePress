import{_ as a,c as t,a5 as o,o as i}from"./chunks/framework.O9ad3XaM.js";const u=JSON.parse('{"title":"连接服务器","description":"","frontmatter":{"title":"连接服务器","sidebar_position":6},"headers":[],"relativePath":"Java/start/connect-to-server.md","filePath":"nitwikit/docs-java/start/connect-to-server.md","lastUpdated":1729683245000}'),l={name:"Java/start/connect-to-server.md"};function r(s,e,c,n,d,p){return i(),t("div",null,e[0]||(e[0]=[o('<h1 id="连接服务器" tabindex="-1">连接服务器 <a class="header-anchor" href="#连接服务器" aria-label="Permalink to &quot;连接服务器&quot;">​</a></h1><h2 id="端口" tabindex="-1">端口 <a class="header-anchor" href="#端口" aria-label="Permalink to &quot;端口&quot;">​</a></h2><p>打开你服务器根目录的 <code>server.properties</code></p><p>找到</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">server-port=25565</span></span></code></pre></div><p><code>25565</code> 即 Minecraft 服务器的默认端口，如果不更改默认端口通常可省略不写</p><h2 id="本地连接" tabindex="-1">本地连接 <a class="header-anchor" href="#本地连接" aria-label="Permalink to &quot;本地连接&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>此方法仅适用于服务端和客户端在同一机器上的情况</p></div><p>本机 IP ，通常有这样几种形式：</p><ul><li>localhost</li><li>127.0.0.1</li><li>0.0.0.0</li></ul><p>如果你没有修改你的服务器端口，那么在你的 Minecraft 客户端中:</p><ol><li>点击多人游戏</li><li>点击添加服务器</li><li>输入上面提到的本地 IP 中的任意一个</li><li>点击完成</li><li>进入服务器</li></ol><p>如果你修改了你的服务器端口，在回环地址后面加个冒号加上你改的端口即可</p><p>如:</p><ul><li>localhost:25566</li><li>127.0.0.1:25566</li><li>0.0.0.0:25566</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这里要使用英文的 <code>:</code> <strong>不能使用中文</strong>的 <code>：</code> ！</p></div><h2 id="远程连接" tabindex="-1">远程连接 <a class="header-anchor" href="#远程连接" aria-label="Permalink to &quot;远程连接&quot;">​</a></h2><p>在开始让你的玩家远程连接至服务器的时候，请先确认有没有公网</p><h3 id="我有公网" tabindex="-1">我有公网 <a class="header-anchor" href="#我有公网" aria-label="Permalink to &quot;我有公网&quot;">​</a></h3><p>假设我现在的公网 IP 是 <code>114.51.14.191</code>，那么我的连接应该是输入 <code>114.51.14.191:25565</code>，</p><p>注意冒号后面的<strong>端口号</strong>应该和你设置的 <strong><code>server-port</code></strong> 一模一样，不然玩家无法连接</p><p>比如我现在把 <strong><code>server-port</code></strong> 改成了 <strong><code>9180</code></strong>，应该这么进入服务器 <code>114.51.14.191:9180</code></p><p>如果我为 <code>114.51.14.191</code> 绑定了域名 <code>yizhan.wiki</code> ，那么你可以这么进 <code>yizhan.wiki:9180</code></p><p>如果很不幸，你的玩家没有正常连接上来，请先按以下步骤检查</p><ul><li>请尝试本地连接，如果不行，那么就是服务器有问题</li><li>如果本地连接正常，你可以尝试在防火墙中放行端口</li><li>检查你在路由器中是否把这个端口公开到公网</li></ul><h3 id="我没公网" tabindex="-1">我没公网 <a class="header-anchor" href="#我没公网" aria-label="Permalink to &quot;我没公网&quot;">​</a></h3><p>查看 <a href="https://nitwikit.yizhan.wiki/process/deploy/intranet-penetration" target="_blank" rel="noreferrer">内网穿透</a> 部分，按照上面的教程把你的端口映射出去</p>',27)]))}const k=a(l,[["render",r]]);export{u as __pageData,k as default};

import{_ as a,c as t,a5 as r,o}from"./chunks/framework.O9ad3XaM.js";const u=JSON.parse('{"title":"Velocity 端","description":"","frontmatter":{"title":"Velocity 端","sidebar_position":2},"headers":[],"relativePath":"nitwikit/docs-java/process/cross-server/plugin/velocity.md","filePath":"nitwikit/docs-java/process/cross-server/plugin/velocity.md","lastUpdated":1731662521000}'),i={name:"nitwikit/docs-java/process/cross-server/plugin/velocity.md"};function s(l,e,c,h,n,p){return o(),t("div",null,e[0]||(e[0]=[r('<h1 id="velocity-端" tabindex="-1">Velocity 端 <a class="header-anchor" href="#velocity-端" aria-label="Permalink to &quot;Velocity 端&quot;">​</a></h1><p>支持 <em>Velocity</em> 的插件</p><h2 id="只安装在跨服端" tabindex="-1">只安装在跨服端 <a class="header-anchor" href="#只安装在跨服端" aria-label="Permalink to &quot;只安装在跨服端&quot;">​</a></h2><h3 id="vlobby" tabindex="-1">VLobby <a class="header-anchor" href="#vlobby" aria-label="Permalink to &quot;VLobby&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>PaperMC</code> <a href="https://hangar.papermc.io/4drian3d/VLobby" target="_blank" rel="noreferrer">https://hangar.papermc.io/4drian3d/VLobby</a></p><p><code>GitHub</code> <a href="https://github.com/4drian3d/VLobby" target="_blank" rel="noreferrer">https://github.com/4drian3d/VLobby</a></p></div><p>一个简单的 <code>/lobby</code> <code>/hub</code> 插件</p><h3 id="limboauth" tabindex="-1">LimboAuth <a class="header-anchor" href="#limboauth" aria-label="Permalink to &quot;LimboAuth&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>见 <a href="/docs-java/process/plugin/other/Login/LimboAuth.html">插件 | LimboAuth</a></p></div><p>一个不错的登录插件。</p><h3 id="authmevelocity" tabindex="-1">AuthMeVelocity <a class="header-anchor" href="#authmevelocity" aria-label="Permalink to &quot;AuthMeVelocity&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>modrinth</code> <a href="https://modrinth.com/plugin/authmevelocity" target="_blank" rel="noreferrer">https://modrinth.com/plugin/authmevelocity</a></p><p><code>GitHub</code> <a href="https://github.com/4drian3d/AuthMeVelocity" target="_blank" rel="noreferrer">https://github.com/4drian3d/AuthMeVelocity</a></p></div><p>这是 Velocity 版本的 AuthMe 。如果你的登录服使用 AuthMe 登录，请务必在 Velocity 上安装此插件，以增加登录系统的安全性和完整性，这可以为你避免一些不必要的麻烦</p><p>如果你不安装此插件，在玩家登录时很可能乘此跳到其他子服务器来跳过登录，以此获取管理员账号来炸服</p><h3 id="huskchat" tabindex="-1">HuskChat <a class="header-anchor" href="#huskchat" aria-label="Permalink to &quot;HuskChat&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>SpigotMC</code> <a href="https://www.spigotmc.org/resources/.94496" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/.94496</a></p><p><code>modrinth</code> <a href="https://modrinth.com/plugin/huskchat" target="_blank" rel="noreferrer">https://modrinth.com/plugin/huskchat</a></p><p><code>GitHub</code> <a href="https://github.com/WiIIiam278/HuskChat" target="_blank" rel="noreferrer">https://github.com/WiIIiam278/HuskChat</a></p></div><p>很轻量、简单的跨服聊天插件</p><p>基本上该有的功能都有，但是无法做到与聊天信息互动等 Trchat 能够做到的功能。他只需要在 Velocity 端安装就能生效，适合追求精简清爽 <s>(其实就是懒)</s> 的服主使用</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>已知 Bug</strong> :</p><p><a href="https://github.com/WiIIiam278/HuskChat/issues/248" target="_blank" rel="noreferrer">Issue 聊天消息无法被其他插件读取</a></p><p>如果你的服务器安装了 QuickShop 等需要输入聊天消息来录入参数的插件</p><p>那么你安装 HuskChat 会让这些插件失效，这是因为子服务器的聊天事件已经被取消了，这会导致这些插件无法获取玩家的聊天消息</p><p>可以根据作者的方案解决这个问题，介意的建议不要使用 HuskChat ，转而用 <a href="https://www.spigotmc.org/resources/.111858/" target="_blank" rel="noreferrer">TrChat</a></p></div><h3 id="sonar" tabindex="-1">Sonar <a class="header-anchor" href="#sonar" aria-label="Permalink to &quot;Sonar&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>SpigotMC</code> <a href="https://www.spigotmc.org/resources/.115239/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/.115239/</a></p><p><code>GitHub</code> <a href="https://github.com/jonesdevelopment/sonar/" target="_blank" rel="noreferrer">https://github.com/jonesdevelopment/sonar/</a></p><p><code>modrinth</code> <a href="https://modrinth.com/plugin/sonar" target="_blank" rel="noreferrer">https://modrinth.com/plugin/sonar</a></p></div><p>一款轻量级的反假人插件，能够有效的防止大部分假人进入你的服务器</p><p>它内置多种<strong>反假人策略</strong>和<strong>验证方式</strong>，可以任你选择</p><p><strong>特色反假人机制</strong>:</p><p>CAPTCHA 在玩家进入服务器时，会进入 Sonar 创建的虚拟服务器中，玩家需要在聊天栏中输入随机生成的验证码才能进入服务器，这样可以防御 <strong>100%</strong> 的假人。非常的安全</p><p>非常推荐安装</p><h2 id="可安装在跨服端或子服" tabindex="-1">可安装在跨服端或子服 <a class="header-anchor" href="#可安装在跨服端或子服" aria-label="Permalink to &quot;可安装在跨服端或子服&quot;">​</a></h2><h3 id="minimotd" tabindex="-1">MiniMOTD <a class="header-anchor" href="#minimotd" aria-label="Permalink to &quot;MiniMOTD&quot;">​</a></h3><p>同 <a href="./BC&amp;WF.html#minimotd">BungeeCord 一侧的讲解</a></p><h3 id="viaversion" tabindex="-1">ViaVersion <a class="header-anchor" href="#viaversion" aria-label="Permalink to &quot;ViaVersion&quot;">​</a></h3><p>同 <a href="./BC&amp;WF.html#viaversion">BungeeCord 一侧的讲解</a></p><h3 id="skinsrestorer" tabindex="-1">SkinsRestorer <a class="header-anchor" href="#skinsrestorer" aria-label="Permalink to &quot;SkinsRestorer&quot;">​</a></h3><p>同 <a href="./BC&amp;WF.html#skinsrestorer">BungeeCord 一侧的讲解</a></p><h3 id="geyser" tabindex="-1">Geyser <a class="header-anchor" href="#geyser" aria-label="Permalink to &quot;Geyser&quot;">​</a></h3><p>同 <a href="./BC&amp;WF.html#geyser">BungeeCord 一侧的讲解</a></p><h2 id="装在跨服端或-子服端" tabindex="-1">装在跨服端或+子服端 <a class="header-anchor" href="#装在跨服端或-子服端" aria-label="Permalink to &quot;装在跨服端或+子服端&quot;">​</a></h2><p>这类插件可以只装在跨服端，但同时在子服安装可以有更多的功能。</p><h3 id="serverutils" tabindex="-1">ServerUtils <a class="header-anchor" href="#serverutils" aria-label="Permalink to &quot;ServerUtils&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>见 <a href="/docs-java/process/plugin/ManageTool/PluginManagement/ServerUtils.html">插件 | ServerUtils</a></p></div><h3 id="playerbalancer" tabindex="-1">PlayerBalancer <a class="header-anchor" href="#playerbalancer" aria-label="Permalink to &quot;PlayerBalancer&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>同 <a href="./BC&amp;WF.html#playerbalancer">BungeeCord 一侧的讲解</a></p></div><h3 id="tab" tabindex="-1">TAB <a class="header-anchor" href="#tab" aria-label="Permalink to &quot;TAB&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>SpigotMC</code> <a href="https://www.spigotmc.org/resources/.57806/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/.57806/</a></p><p><code>GitHub</code> <a href="https://github.com/NEZNAMY/TAB" target="_blank" rel="noreferrer">https://github.com/NEZNAMY/TAB</a></p><p><code>modrinth</code> <a href="https://modrinth.com/plugin/tab-was-taken" target="_blank" rel="noreferrer">https://modrinth.com/plugin/tab-was-taken</a></p></div><p>一款好用的 tab 栏插件，此外，还可以制作计分板，Bossbar</p><p>支持制作文字动画，支持 RGB 颜色</p><p>想让他显示 PlaceholderAPI 的变量?请在所有子服务器上安装 <a href="https://www.spigotmc.org/resources/.83966/" target="_blank" rel="noreferrer">Tab-Bridge</a></p><p>此外，如果你使用了 Layout 功能，如果你不安装此插件，会导致一些显示 Bug</p><p>因此强烈建议将 Tab-Bridge 一起安装</p><p><em>插件需要安装在代理端上，如果你在子服安装了TAB，可能会导致在高版本上出现“网络协议错误”等位置问题。</em></p><h2 id="装在跨服端-子服端" tabindex="-1">装在跨服端+子服端 <a class="header-anchor" href="#装在跨服端-子服端" aria-label="Permalink to &quot;装在跨服端+子服端&quot;">​</a></h2><p>这类插件必须要同时安装在跨服端和子服。</p><h3 id="papiproxybridge" tabindex="-1">PAPIProxyBridge <a class="header-anchor" href="#papiproxybridge" aria-label="Permalink to &quot;PAPIProxyBridge&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>同 <a href="./BC&amp;WF.html#papiproxybridge">BungeeCord 一侧的讲解</a></p></div><h3 id="signedvelocity" tabindex="-1">SignedVelocity <a class="header-anchor" href="#signedvelocity" aria-label="Permalink to &quot;SignedVelocity&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>modrinth</code> <a href="https://modrinth.com/plugin/signedvelocity" target="_blank" rel="noreferrer">https://modrinth.com/plugin/signedvelocity</a></p></div><blockquote><p>从 Minecraft 1.19.1 开始，Mojang 实现了一个<a href="https://zh.minecraft.wiki/w/Java%E7%89%881.19.1#%E5%B8%B8%E8%A7%84" target="_blank" rel="noreferrer">新的聊天系统</a>，该系统使用每个玩家拥有的签名密钥。Velocity 尚不完全支持取消或修改这种类型的消息和命令，因此你可以安装 SignedVelocity 插件， 这将允许将消息或命令传输到你的服务器，在服务器上收到消息或命令后， 将应用在 Velocity 中计算的结果。 —— Velocity 官方文档</p></blockquote><p>此外由于其功能实现，它也能修复因缺少个人信钥而导致无法加入服务器等问题。</p>',56)]))}const m=a(i,[["render",s]]);export{u as __pageData,m as default};
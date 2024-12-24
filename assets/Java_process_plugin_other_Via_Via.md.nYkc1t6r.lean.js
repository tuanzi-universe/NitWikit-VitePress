import{_ as e,c as i,a5 as r,o as t}from"./chunks/framework.O9ad3XaM.js";const l="/assets/%E7%89%88%E6%9C%AC%E5%85%BC%E5%AE%B9%E5%9B%BE.DT8cRxdW.png",b=JSON.parse('{"title":"跨版本","description":"","frontmatter":{"slug":"/Plugins/OtherPlugin/Via","title":"跨版本","sidebar_position":4},"headers":[],"relativePath":"Java/process/plugin/other/Via/Via.md","filePath":"nitwikit/docs-java/process/plugin/other/Via/Via.md","lastUpdated":1732930663000}'),o={name:"Java/process/plugin/other/Via/Via.md"};function s(p,a,h,n,c,d){return t(),i("div",null,a[0]||(a[0]=[r('<h1 id="什么是跨版本" tabindex="-1">什么是跨版本 <a class="header-anchor" href="#什么是跨版本" aria-label="Permalink to &quot;什么是跨版本&quot;">​</a></h1><p>跨版本就是可以让不同于服务器版本的客户端版本进入服务器，比如服务器版本为 1.20.1，安装跨版本之后可以让 1.19.4 的客户端进入服务器</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>跨版本不适合模组服，代理端，Leaves！会出很多问题！</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>跨版本不宜太大，除非你有能力使低版本玩家获得更好的游戏体验</p><p>最简单的例子：</p><p>1.17 以下的玩家一进入 1.17+服务器的 y 小于 0，就会疯狂回弹，严重影响游戏体验</p></div><h2 id="支持的范围" tabindex="-1">支持的范围 <a class="header-anchor" href="#支持的范围" aria-label="Permalink to &quot;支持的范围&quot;">​</a></h2><p>插件版本的 via 支持以下版本进入服务器</p><p><img src="'+l+'" alt=""></p><ul><li>ViaVersion - 向上兼容</li></ul><p>如图中服务器版本为 1.9.x 时，允许使用 1.9.x - 1.21.x 的客户端进服</p><ul><li>ViaBackwards - 向下兼容</li></ul><p>如图中服务器版本为 1.21.x 时，允许 1.9.x -1.20.x 的客户端进服</p><ul><li>ViaRewind - 向下兼容更老版本</li></ul><p>让你的服务器支持 1.7.x 以及 1.8.x 客户端进服</p><h2 id="支持的服务器" tabindex="-1">支持的服务器 <a class="header-anchor" href="#支持的服务器" aria-label="Permalink to &quot;支持的服务器&quot;">​</a></h2><h3 id="插件版" tabindex="-1">插件版 <a class="header-anchor" href="#插件版" aria-label="Permalink to &quot;插件版&quot;">​</a></h3><p>ViaVersion + ViaBackwards + ViaRewind</p><p>这 3 个插件支持的服务端版本为 1.17～1.21</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Via* 插件剔除了 Java8 支持，这导致你不能在更低的服务端版本使用他</p><p>如果你想要支持服务端版本 1.8～1.21 的插件</p><p>在 <a href="https://ci.viaversion.com/job/ViaVersion-Java8" target="_blank" rel="noreferrer">这里</a> 获取 Java8 版本</p></div><h3 id="独立版-viaproxy" tabindex="-1">独立版(ViaProxy) <a class="header-anchor" href="#独立版-viaproxy" aria-label="Permalink to &quot;独立版(ViaProxy)&quot;">​</a></h3><ul><li>Release (1.0.0 - 1.20.5)</li><li>Beta (b1.0 - b1.8.1)</li><li>Alpha (a1.0.15 - a1.2.6)</li><li>Classic (c0.0.15 - c0.30 包含 <a href="https://wiki.vg/Classic_Protocol_Extension" target="_blank" rel="noreferrer">CPE</a>)</li><li>愚人节快照 (3D Shareware， 20w14infinite)</li><li>战斗测试快照 (Combat Test 8c)</li><li>基岩版服务器 1.20.70 (<a href="https://github.com/RaphiMC/ViaBedrock#features" target="_blank" rel="noreferrer">某些功能缺失</a>)</li></ul><h2 id="支持的客户端" tabindex="-1">支持的客户端 <a class="header-anchor" href="#支持的客户端" aria-label="Permalink to &quot;支持的客户端&quot;">​</a></h2><ul><li>Release (1.7.2 - 1.21)</li><li>基岩版 (需要 <a href="/docs-java/process/mobile-player/Geyser/geyser">Geyser</a> 插件)</li></ul><p>你没看错，ViaProxy 可以让 1.20.4 客户端进入 Classic 版本的服务器(后者大概发布于十年前)</p><p>也可以让一个 JAVA 版玩家进入基岩版服务器，或者基岩版玩家进入 JAVA 版服务器！</p><h2 id="笨蛋脚本" tabindex="-1">笨蛋脚本 <a class="header-anchor" href="#笨蛋脚本" aria-label="Permalink to &quot;笨蛋脚本&quot;">​</a></h2><p><a href="https://dl.yizhan.wiki/windows-latest/via-setup.exe" target="_blank" rel="noreferrer">下载</a>，为你自动配置 Via</p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="如何选择-via-套件" tabindex="-1">如何选择 Via 套件 <a class="header-anchor" href="#如何选择-via-套件" aria-label="Permalink to &quot;如何选择 Via 套件&quot;">​</a></h3><p><a href="https://jo0001.github.io/ViaSetup/?lang=en" target="_blank" rel="noreferrer">Via 套件选择</a></p><h3 id="用高版本进入低版本服务器-可用高版本的物品吗" tabindex="-1">用高版本进入低版本服务器，可用高版本的物品吗？ <a class="header-anchor" href="#用高版本进入低版本服务器-可用高版本的物品吗" aria-label="Permalink to &quot;用高版本进入低版本服务器，可用高版本的物品吗？&quot;">​</a></h3><p>会用材质差不多的低版本物品替换显示，但享受不到大部分高版本物品功能</p><h3 id="低版本显示不了高版本的材质怎么办" tabindex="-1">低版本显示不了高版本的材质怎么办？ <a class="header-anchor" href="#低版本显示不了高版本的材质怎么办" aria-label="Permalink to &quot;低版本显示不了高版本的材质怎么办？&quot;">​</a></h3><p>原版插件不支持，但是可以通过手段绕过后面会讲(仅支持 1.16+)</p><h3 id="如果我拥有代理端-我应该将-via-安装到哪里" tabindex="-1">如果我拥有代理端，我应该将 Via 安装到哪里？ <a class="header-anchor" href="#如果我拥有代理端-我应该将-via-安装到哪里" aria-label="Permalink to &quot;如果我拥有代理端，我应该将 Via 安装到哪里？&quot;">​</a></h3><p>Bungeecord、Velocity 和各种 Minecraft 服务端均可以安装 Via。但如果你有反作弊、反假人等，</p><p>对数据包进行大量操作的插件，后端服务器获取的玩家版本为代理端的版本，并非玩家客户端版本，</p><p>容易引起兼容性问题，请谨慎将 Via 套件安装在代理端。</p><h3 id="via-的版本选择" tabindex="-1">Via 的版本选择 <a class="header-anchor" href="#via-的版本选择" aria-label="Permalink to &quot;Via 的版本选择&quot;">​</a></h3><p>如果选择同时安装 viaversion 和 viabackward ，他们的版本尽量选择相同的。</p><h3 id="为什么我在服务器安装-via-后-仍然显示版本不支持" tabindex="-1">为什么我在服务器安装 Via 后，仍然显示版本不支持？ <a class="header-anchor" href="#为什么我在服务器安装-via-后-仍然显示版本不支持" aria-label="Permalink to &quot;为什么我在服务器安装 Via 后，仍然显示版本不支持？&quot;">​</a></h3><p>下载更新版本的代理端后，需要更新 Via 套件到最新版。</p><p>即使不使用代理端，我们仍然建议你至少每个月更新一次 Via</p><h3 id="我无法使用新版本的方块、功能" tabindex="-1">我无法使用新版本的方块、功能 <a class="header-anchor" href="#我无法使用新版本的方块、功能" aria-label="Permalink to &quot;我无法使用新版本的方块、功能&quot;">​</a></h3><p>Via 的目的是允许兼容，但不打算添加新的项目、方块和功能。</p><h3 id="我的玩家因为发送太多数据包而被踢" tabindex="-1">我的玩家因为发送太多数据包而被踢？ <a class="header-anchor" href="#我的玩家因为发送太多数据包而被踢" aria-label="Permalink to &quot;我的玩家因为发送太多数据包而被踢？&quot;">​</a></h3><p>如果你没有使用 paper fork 可以在配置中增加 max-pps，如果使用paper fork，</p><p>如果使用 paper fork，请直接将其调整为 -1，并调整 paper 的 pps 限制。</p><p>(尝试增加到玩家没有问题，不要全部禁用，这会导致服务器被玩家恶意使用数据包卡顿)</p>',48)]))}const f=e(o,[["render",s]]);export{b as __pageData,f as default};

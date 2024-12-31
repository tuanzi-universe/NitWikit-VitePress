import{_ as p,c as u,a5 as o,G as a,w as t,B as r,o as c,j as l,a as n}from"./chunks/framework.O9ad3XaM.js";const C=JSON.parse('{"title":"如何抵御网络攻击","description":"","frontmatter":{"title":"如何抵御网络攻击","sidebar_position":6},"headers":[],"relativePath":"process/maintenance/how-to-defend-against-cyber-attacks.md","filePath":"nitwikit/docs/process/maintenance/how-to-defend-against-cyber-attacks.md","lastUpdated":1735421574000}'),h={name:"process/maintenance/how-to-defend-against-cyber-attacks.md"};function b(m,e,P,f,k,g){const i=r("TabItem"),s=r("Tabs"),d=r("nw-image-viewer");return c(),u("div",null,[e[6]||(e[6]=o(`<h1 id="如何抵御网络攻击" tabindex="-1">如何抵御网络攻击 <a class="header-anchor" href="#如何抵御网络攻击" aria-label="Permalink to &quot;如何抵御网络攻击&quot;">​</a></h1><p>随着你的 Minecraft 服务器人数和宣传越来越多，你的服务器越有可能收到其他“友商”或者某些不怀好意的玩家攻击。</p><p>别害怕，大多数网络攻击没有那么致命，可能只会引起玩家高 Ping 掉线、后台操作卡顿等。</p><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><p>下面将列出几种常见的 Minecraft 服务器容易遭受的攻击类型。</p><h3 id="应用层-也称为-l7" tabindex="-1">应用层(也称为 L7 ) <a class="header-anchor" href="#应用层-也称为-l7" aria-label="Permalink to &quot;应用层(也称为 L7 )&quot;">​</a></h3><p>在服务器上运行并绑定了指定地址和端口的应用程序，可以在这一层接受连接。</p><p>应用层的攻击往往意味着针对某个应用程序发起的攻击。</p><p>通常攻击者会利用应用中的漏洞，来让应用占用更多的计算机资源，或者通过大量请求使带宽不堪重负，使服务器难以处理新连接。</p><h4 id="假人攻击" tabindex="-1">假人攻击 <a class="header-anchor" href="#假人攻击" aria-label="Permalink to &quot;假人攻击&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p>本处仅讨论关于Minecraft服务器网络安全的概念，不涉及关于“生电”中假人的相关概念。</p></div><p>假人攻击（Fake Player Attack），是指攻击者利用技术手段，模拟正常玩家的行为并向 Minecraft 服务器发起非正常请求，进而使得 Minecraft 服务器因各种原因而瘫痪崩溃或被渗透的一种攻击方式。</p><p>假人对服务器造成的影响不尽相同，包括但不限于：</p><ol><li>大量假人涌入服务器使服务器达到最大人数限制从而导致正常玩家无法进入服务器。</li><li>假人的加入与退出操作可能会导致某些开发不完全的插件在处理此类逻辑时发生内存泄漏和其他非预期的异常。</li><li>利用聊天框发送垃圾信息刷屏，扰乱正常消息处理与聊天体验。</li></ol><p>在某些程度上，假人攻击类似于 Web 安全中的 <a href="https://www.qiuwenbaike.cn/wiki/%E6%8B%92%E7%BB%9D%E6%9C%8D%E5%8A%A1%E6%94%BB%E5%87%BB#%E8%B5%84%E6%BA%90%E6%B6%88%E8%80%97%E5%9E%8B%E6%94%BB%E5%87%BB" target="_blank" rel="noreferrer">CC 攻击</a>。</p><h4 id="motd-状态请求-攻击" tabindex="-1">MOTD (状态请求) 攻击 <a class="header-anchor" href="#motd-状态请求-攻击" aria-label="Permalink to &quot;MOTD (状态请求) 攻击&quot;">​</a></h4><p>简单来说，就是向服务器请求状态 (也就是 Ping)，玩家每次 Ping 服务器时，服务器将返回一个 MOTD 。</p><p>由于 MOTD 中包含图片和文字信息，大量的请求会占满服务器带宽，使服务器难以处理新的连接。</p><p>Minecraft 后端服务器一般是不会对 Ping 进行过滤和记录的，这会导致 MOTD 攻击难以察觉。</p><p>但是对于 Velocity / BungeeCord 等反向代理服务端，默认 Ping 服务器的行为是会被记录的，类似于：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[/127.0.0.1:61647] &lt;-&gt; InitialHandler has pinged</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>可以通过调整设置 <code>log_pings</code> (BungeeCord) 或 <code>show-ping-requests</code> (Velocity) 来启用或禁用反向代理在控制台输出 Ping 日志。</p></div><h4 id="其他插件" tabindex="-1">其他插件 <a class="header-anchor" href="#其他插件" aria-label="Permalink to &quot;其他插件&quot;">​</a></h4><p>如果你使用了 Plan， Dynmap 等插件，这些插件会在某个端口开启网站。</p><p>请注意这些端口如果被不怀好意的人知道，则可能会导致这些 HTTP 端口遭受攻击。</p><h4 id="minecraft-漏洞攻击" tabindex="-1">Minecraft 漏洞攻击 <a class="header-anchor" href="#minecraft-漏洞攻击" aria-label="Permalink to &quot;Minecraft 漏洞攻击&quot;">​</a></h4><p>通过利用 Minecraft 游戏本身的漏洞，向服务器发送 (可能是大量的)不合法的数据包，造成服务器卡顿甚至<strong>崩溃</strong>，例如攻击者可以向 BDS 服务器发送大量空数据包使其不断打印日志而不再正常处理游戏内容。</p><h4 id="远程桌面-ssh爆破" tabindex="-1">远程桌面 / SSH爆破 <a class="header-anchor" href="#远程桌面-ssh爆破" aria-label="Permalink to &quot;远程桌面 / SSH爆破&quot;">​</a></h4><p>众所周知，只要足够有耐心，就一定能赢得猜数游戏。远程桌面或 SSH 也是如此。由于其并没有针对用户的复杂的验证机制，这导致任何人都可以无限制地试错。所以攻击者可以通过编写脚本等方式制作软件，不断地假设密码登录服务器远控服务，这就是<strong>爆破攻击</strong>，或者叫暴力破解密码。最终当登录成功时，攻击即成功，攻击者将<strong>获得你服务器完全的控制权</strong>。</p><p>注意由于该服务在电脑上非常常见，所以世界各处经常有攻击者通过扫描 IPv4 地址(扫段攻击，通过对某个 IP 段的所有 IP 逐个检测来找出可以攻击的目标)，并通过扫描端口(扫端口，通过对某个 IP 上的所有端口进行检测来找出可以攻击的目标)，来找到你的服务器的远控地址，而不需要事先对你的服务器或你本人有任何了解。也就是说，如果你遭遇了这种攻击，不要一味地反思自己是否激怒过他人或和小人有了过节，而是要专注于防范你所遭受的攻击本身。</p><h3 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h3><p>网络层攻击是 DDoS 攻击的一种形式，它针对于网络基础架构进行攻击。</p><p>最常见的网络层攻击是IP地址欺骗，攻击者可以伪造IP地址并向目标服务器发送大量数据包，以消耗目标服务器的网络带宽和系统资源。</p><p>Minecraft JAVA 服务端采用 TCP 作为通信协议，所以你可能会遭受到如 TCP Flood (TCP 洪水攻击) 等攻击方式。</p><p>防御这种类型的攻击唯一办法就是增大宽带，没有什么别的好办法。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><h3 id="低调做人-不要惹是生非" tabindex="-1">低调做人，不要惹是生非 <a class="header-anchor" href="#低调做人-不要惹是生非" aria-label="Permalink to &quot;低调做人，不要惹是生非&quot;">​</a></h3><p>在开服圈子里，有大量的攻击并非无故发起。多数时候是因为服主招惹了一些有攻击能力的人，才招致服务器受到攻击。你不是专业的企业家、生意人，你的服务器非常脆弱。我的世界作为世界上销量最高的游戏，其玩家社区非常复杂而混乱。如果你对其做不到非常了解，请务必谨慎对待。</p><ol><li>遇到对服务器中违规感到愤怒的玩家，不要一味地对他采取强硬态度。尽可能和他私下解决，保证他对处罚结果感到满意，如从轻处罚、删除处罚名单等。遇到不讲理的玩家，虽然其行为本身不合理，但顾客就是上帝，你仍然需要与其协商做出让步，在对方确实执意要破坏服务器时，再对其采取强硬态度来保证自身利益。注意协商成功后不要和其他任何玩家提及此事。</li><li>对已付费、已赞助或活跃的玩家放宽违规行为的评判标准，并优先响应其反馈。愿意为服务器花费真金白银或大把时间的玩家通常更在意服务器，他们的体验往往更重要，不仅后期有潜力为服务器带来更多收入和更多玩家，还很有可能在服务器中遭遇负责情绪时采取更极端的行为。你可以在这类玩家违反规定后视其影响对其适当采取宽容态度(睁一只眼闭一只眼)，并在他们和其他玩家起冲突时以协调为主，尽可能不对其进行处罚。</li><li>千万不要在其他服务器玩家交流平台(比如服务器群)里宣传自己的服务器。如果你的服务器非常缺人，这时突然来人宣传把你的玩家全抢走了，你怎么想？在其他服务器交流平台上宣传自己的服务器往往会被对方的玩家或管理团队视为不正当竞争，这将激怒他们，并导致他们对你的服务器发起攻击。</li><li>不要招惹任何人，包括任何从事或爱好计算机行业的人和所有mc玩家。请注意，很多人嘴上不说自己喜欢攻击他人，但是他们会在愤怒的情况下想尽一切方法搞砸你的服务器，就像他们和其他人闹矛盾时会起肢体冲突一样。</li></ol><h3 id="使用-velocity-bungeecord" tabindex="-1">使用 Velocity / BungeeCord <a class="header-anchor" href="#使用-velocity-bungeecord" aria-label="Permalink to &quot;使用 Velocity / BungeeCord&quot;">​</a></h3><p>不要试图单独使用任何后端服务器 (如 Spigot / Paper / Purpur 等) 抵御大规模应用层攻击。</p><p>后端服务器处理连接的速度较慢，这将会导致消耗比代理更多的计算机资源，一旦攻击规模过大，这会导致后端服务器卡顿甚至崩溃。</p><p>但对于 Velocity / BungeeCord 等代理服务器，它们被设计为允许接受大量连接，且反向代理自带单个 IP 多次重新连接的配置：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">connection_throttle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">connection_throttle_limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span></code></pre></div><p>这意味着，单个 IP 地址在 4000ms 内最多能连接服务器 3 次，如果超过该值，服务器将拒绝此 IP 的任何登入请求，即使该 IP 使用了不同的游戏 ID 尝试加入服务器。</p><h3 id="在代理端安装反假人插件" tabindex="-1">在代理端安装反假人插件 <a class="header-anchor" href="#在代理端安装反假人插件" aria-label="Permalink to &quot;在代理端安装反假人插件&quot;">​</a></h3><p>你可以在代理端安装假人过滤插件，同样的，由于代理端相较后端服务器在面对大量连接时更加高效，请务必在<strong>代理端</strong>安装插件。</p><p>以下是推荐的反机器人插件列表</p><table tabindex="0"><thead><tr><th>名称</th><th>介绍</th><th>支持平台</th><th>缺点</th></tr></thead><tbody><tr><td><a href="https://github.com/jonesdevelopment/sonar" target="_blank" rel="noreferrer">Sonar</a></td><td>轻量级反机器人，皆在检测和移除机器人，而不影响任何真正的玩家</td><td>Velocity， BungeeCord</td><td>暂时没有？</td></tr><tr><td><a href="https://github.com/Elytrium/LimboFilter" target="_blank" rel="noreferrer">LimboFilter</a></td><td>强大的过滤机器人方案</td><td>Velocity</td><td>笨重且配置复杂，且仅在必要的时候提供更新。 (缺少维护)</td></tr><tr><td><a href="https://en.docs.nickuc.com/v/nantibot" target="_blank" rel="noreferrer">nAntiBot</a></td><td>一个高效反机器人插件</td><td>Spigot， Velocity， BungeeCord</td><td>依赖云服务，无法在服务器网络不好的情况下使用该插件。</td></tr><tr><td><a href="https://github.com/4drian3d/EpicGuard" target="_blank" rel="noreferrer">EpicGuard</a></td><td>基于事件的反机器人和反VPN插件</td><td>Waterfall (停止维护)， Paper， Velocity</td><td>容易绕过(但没那么烦人)，且只支持特定的Paper服务端。</td></tr><tr><td><a href="https://github.com/AntiAttackMC/AATRL_Public" target="_blank" rel="noreferrer">AntiAttackRL</a></td><td>支持多平台的AntiBot插件</td><td>Bukkit， BungeeCord， Folia， Sponge， Velocity与它们的分支</td><td>受攻击时新玩家无法直接进入，需要管理员操作; 防御方案过时</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该列表目前仅列出了免费的反假人插件，实际情况可能需要使用者自行决定。</p><p>使用插件直接对抗超大规模的网络攻击是不太现实的。</p><p>如果正在遭受这种攻击，最合理的办法是提升服务器带宽或使用专门针对于此类攻击的代理</p></div><h3 id="付费防御核心" tabindex="-1">付费防御核心 <a class="header-anchor" href="#付费防御核心" aria-label="Permalink to &quot;付费防御核心&quot;">​</a></h3><p>如果你非常有钱，你可以打开跨服端<a href="/Java/process/cross-server/server-core-choose">核心选择</a>，选择那些付费的跨服端核心， NullCordX 是一个较好的选择。</p><p>但在没有想好的情况下，<strong>不建议为反假人付费</strong>。</p><h3 id="爆破攻击防御" tabindex="-1">爆破攻击防御 <a class="header-anchor" href="#爆破攻击防御" aria-label="Permalink to &quot;爆破攻击防御&quot;">​</a></h3><h4 id="改掉默认端口" tabindex="-1">改掉默认端口 <a class="header-anchor" href="#改掉默认端口" aria-label="Permalink to &quot;改掉默认端口&quot;">​</a></h4><p>修改默认端口为其他端口。尽可能使用<strong>高位端口</strong>，例如<code>5000</code>和<code>55555</code>端口尽可能不要使用，<code>8371</code>不推荐使用，<code>36752</code>推荐使用。</p><h5 id="修改windows默认远程桌面端口" tabindex="-1"><a href="https://learn.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/clients/change-listening-port" target="_blank" rel="noreferrer">修改Windows默认远程桌面端口</a> <a class="header-anchor" href="#修改windows默认远程桌面端口" aria-label="Permalink to &quot;[修改Windows默认远程桌面端口](https://learn.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/clients/change-listening-port)&quot;">​</a></h5><h5 id="修改linux系统中默认ssh端口" tabindex="-1"><a href="https://cloud.tencent.com/developer/article/1635355" target="_blank" rel="noreferrer">修改Linux系统中默认ssh端口</a> <a class="header-anchor" href="#修改linux系统中默认ssh端口" aria-label="Permalink to &quot;[修改Linux系统中默认ssh端口](https://cloud.tencent.com/developer/article/1635355)&quot;">​</a></h5><h4 id="设置强密码" tabindex="-1">设置强密码 <a class="header-anchor" href="#设置强密码" aria-label="Permalink to &quot;设置强密码&quot;">​</a></h4><p>对于容易被爆破的服务，如 MCSM、机器人框架、背包同步软件服务端、远程控制等服务，设置强密码，最好 20 位以上，只要软件允许就要包含：</p><ul><li>大小写英文</li><li>数字</li><li>特殊符号，如<code>!@#$*_.</code></li></ul><p>例如不要使用以下密码：</p><ul><li><code>123456</code>(又短又简单，黑客的最爱)</li><li><code>114514</code>(极常见词汇，114514 是互联网上常见的梗)</li><li><code>#sI3wA@!</code>(虽然复杂但是由于较短仍然容易被暴力破解)</li><li><code>skyworkserver</code>(服务器名)</li><li><code>yizhan</code>(人名、物品名、地名等)</li><li><code>111111111111111111111111111</code>(虽然很长，但是不复杂，仍然容易被破解)</li><li><code>minimouse4820030611</code>(包含生日等个人信息)</li></ul><p>并尽可能不使用以下密码：</p><ul><li><code>yizhan114514</code>(由常见词汇组成)</li><li><code>shuodedaoli</code>(汉语拼音而且对应的汉语为常见词汇，本密码对应的汉语词汇为常见的梗“说的道理”)</li><li><code>#tianjifuwuqi</code>(除了寥寥几位强密码以外其他都是弱密码)</li></ul><h4 id="在操作系统中安装防御软件" tabindex="-1">在操作系统中安装防御软件 <a class="header-anchor" href="#在操作系统中安装防御软件" aria-label="Permalink to &quot;在操作系统中安装防御软件&quot;">​</a></h4><h5 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h5><p>有火绒(家庭版即自带安全防护无需付费)等杀毒软件可供选择，宝塔面板也可以购买付费的防爆破功能</p><h5 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h5><p>有雷池waf、1P等面板可供选择</p><h3 id="网络层攻击防御" tabindex="-1">网络层攻击防御 <a class="header-anchor" href="#网络层攻击防御" aria-label="Permalink to &quot;网络层攻击防御&quot;">​</a></h3><h4 id="将服务器托管到高防机房-购买高防-vps" tabindex="-1">将服务器托管到高防机房/购买高防 VPS <a class="header-anchor" href="#将服务器托管到高防机房-购买高防-vps" aria-label="Permalink to &quot;将服务器托管到高防机房/购买高防 VPS&quot;">​</a></h4><p>对于大多数 MC 服务器，150G 的防御是足够的，性价比较高。</p><p>一般托管一个月大概 800 RMB，速率为 50 Mbps。</p><p>建议最多升级到 300G 防御 (再多就放弃吧这是想让你倒闭的)。</p><p>如果是 VPS，建议向 VPS 提供商咨询防御服务。</p><h4 id="使用minecraft代理" tabindex="-1">使用Minecraft代理 <a class="header-anchor" href="#使用minecraft代理" aria-label="Permalink to &quot;使用Minecraft代理&quot;">​</a></h4><p>例如 TCPShield,Cloudflare 和 MineKube</p><p>包含专门针对于缓解 Minecraft 攻击的负载均衡代理，且能够有效隐藏服务器 IP 地址。</p><p>缺点是似乎还没有任何一家这样的代理拥有国内服务器(延迟高)，且需要花费一点时间设置</p><p>那些在 CF 上 A(或AAAA,CNAME)过去到源站(可能配上 SRV)就是<strong>自欺欺人,完全没用</strong>,CF 压根不会代理这些端口和协议的流量,开小黄云也一样</p>`,81)),a(s,{queryString:"protect"},{default:t(()=>[a(i,{value:"cf-tunnel",label:"Cloudflare Tunnel"},{default:t(()=>e[0]||(e[0]=[l("p",null,"Cloudflare 的内网穿透 Tunnel,当高防也是疯了",-1),l("p",null,"优点：",-1),l("ul",null,[l("li",null,"免费，无需注册"),l("li",null,"296 Tbps 高防,298 位置"),l("li",null,"不限流"),l("li",null,"支持 TCP,UDP,RDP,SSH,HTTP"),l("li",null,"SSH 提供 WebSSH,还可以通过 Access 管理"),l("li",null,"自带内网穿透")],-1),l("p",null,"缺点：",-1),l("ul",null,[l("li",null,"延迟较大(不可以优选)"),l("li",null,"客户端需安装 mod 才能进入(仅限 TCP,UDP)")],-1)])),_:1}),a(i,{value:"cf-spectrum",label:"Cloudflare Spectrum"},{default:t(()=>e[1]||(e[1]=[l("p",null,"Cloudflare 用于 TCP,UDP 协议的防御,可惜价格太贵了(1$/GB抢钱)",-1),l("p",null,"优点:",-1),l("ul",null,[l("li",null,"296 Tbps 高防,298 位置"),l("li",null,"支持 TCP,UDP,RDP,SSH,HTTP"),l("li",null,"提供1个 AnyCast 独立 IPV4"),l("li",null,"SSH 提供 WebSSH,还可以通过 Access 管理")],-1),l("p",null,"缺点：",-1),l("ul",null,[l("li",null,"价格太贵了(CF Pro + 流量计费)(CF Partner 计划早没了)"),l("li",null,"延迟较大(不可以优选)")],-1),l("p",null,"价格多贵?",-1),l("p",null,[n("Cloudflare Pro 25$/月(约合人民币178元,免费流量"),l("strong",null,"5GB"),n("),此后 1$/"),l("strong",null,"GB")],-1),l("p",null,"也就是说,1 TB 流量价格为 1044$,约合人民币7443元,还不算 CF Pro 订阅费用,真需要可以考虑 Papyrus",-1)])),_:1}),a(i,{value:"minekube",label:"MineKube"},{default:t(()=>e[2]||(e[2]=[l("p",null,"MineKube 的免费保护,这个组织还有另一个有名作品 Gate",-1),l("p",null,"个人感觉比 Cloudflare Tunnel 强很多(比 Cloudflare Spectrum 体验都好)",-1),l("p",null,"优点：",-1),l("ul",null,[l("li",null,"免费，无需注册"),l("li",null,"自带高防"),l("li",null,"不限流"),l("li",null,"会提供一个免费域名和1个 AnyCast 独立 IPV4"),l("li",null,"有 Dashboard,可以进行网络分流,管理,黑名单等操作"),l("li",null,"自带内网穿透")],-1),l("p",null,"缺点：",-1),l("ul",null,[l("li",null,"延迟非常大"),l("li",null,"没 Geyser 支持")],-1),l("p",null,[l("a",{href:"https://connect.minekube.com/",target:"_blank",rel:"noreferrer"},"官网")],-1)])),_:1}),a(i,{value:"tcpshield",label:"TCPShield"},{default:t(()=>e[3]||(e[3]=[l("p",null,"TCPShield 专业的 Minecraft 网络保护",-1),l("p",null,"优点：",-1),l("ul",null,[l("li",null,"提供免费套餐(1TB 免费流量)"),l("li",null,[l("strong",null,"L7层保护(会校验流量合法性)")]),l("li",null,"提供面板管理流量"),l("li",null,"价格便宜")],-1),l("p",null,"缺点:",-1),l("ul",null,[l("li",null,"延迟较大(启动 Asia Network 后会好很多)")],-1),l("p",null,"Asia Network(亚洲网络):",-1),l("ul",null,[l("li",null,"提供新加坡和东京网络"),l("li",null,"价格:0.01 $/GB(与其他流量分开计费,没有免费流量)(约合人民币7分)")],-1),l("p",null,"Geyser 支持需要 Premium 计划(100 $/月,堪比抢钱)",-1),l("p",null,"Pro 计划(25$ 每月)(约合人民币178元):",-1),l("ul",null,[l("li",null,"5 TB 免费流量"),l("li",null,"IP 防火墙,可过滤流量")],-1),l("p",null,[l("a",{href:"https://tcpshield.com/",target:"_blank",rel:"noreferrer"},"官网")],-1)])),_:1}),a(i,{value:"playit",label:"Playit.gg(推荐)"},{default:t(()=>e[4]||(e[4]=[l("p",null,[n("性价比非常高,虽说"),l("s",null,"正式用途是朋友联机")],-1),l("p",null,"优点:",-1),l("ul",null,[l("li",null,"不限流量"),l("li",null,"支持任意 TCP,UDP 代理"),l("li",null,"提供亚洲节点(一般来说会被分配到日本节点)"),l("li",null,"提供免费域名"),l("li",null,"自带内网穿透"),l("li",null,"提供防火墙")],-1),l("p",null,"缺点:",-1),l("ul",null,[l("li",null,"没有分析面板"),l("li",null,"绑定自己的域名需要 Premium"),l("li",null,"没有 L7 过滤")],-1),l("p",null,[n("Premium 价格:"),l("strong",null,"3美元"),n("/月(约合20人民币)(非常便宜!)")],-1),l("p",null,"可以购买独立 IPV4 IP 和 IPV6 IP",-1)])),_:1}),a(i,{value:"papyrus",label:"Papyrus"},{default:t(()=>e[5]||(e[5]=[l("p",null,"没有免费套餐,但看在 Cloudflare Spectrum 的面子上还是写了",-1),l("p",null,"VIP套餐(25 $ 每月,约合人民币177元):",-1),l("ul",null,[l("li",null,"支持 Geyser"),l("li",null,"L7 过滤")],-1),l("p",null,"流量状况:",-1),l("ul",null,[l("li",null,"无限流量: 仅提供纽约，法兰克福节点"),l("li",null,"Cloudflare Spectrum 流量: 流量数未知,但不是无限")],-1),l("p",null,"Enterprise套餐(250 $ 每月,约合人民币1778元):",-1),l("ul",null,[l("li",null,"Cloudflare Spectrum 无限流量")],-1),l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,"说句好笑的,Papyrus 官网上说他们有 330 节点,但实际上,Cloudflare 去掉中国节点后只有 298 个节点,算上中国节点后才 330 个"),l("p",null,"Cloudflare Spectrum 目前是没中国节点的")],-1)])),_:1})]),_:1}),e[7]||(e[7]=o('<h4 id="狂套-frp" tabindex="-1">狂套 Frp <a class="header-anchor" href="#狂套-frp" aria-label="Permalink to &quot;狂套 Frp&quot;">​</a></h4><p>这个方法比较缺德，我们只需要疯狂 Frp ，一个 Frp 被打死了，我们就换另一个 Frp ，通知玩家重新连接就可以。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>除非迫不得已，不要使用这种方法防御攻击。就算被迫使用这种方法防御攻击，也千万不要告诉任何人，最好对于自己的服务器管理员也闭口不谈，只说“攻击的事我暂时解决了，让玩家进服吧”。 因为在开服圈子的任何一处这种方法都是一种十分自私、对同行极不负责任的行为。 你的行为可能会导致相应的内网穿透运营商突然出现大量额外支出，并影响大量使用同一节点的人正常使用服务(如果节点被打死了，那么攻击者就是在攻击你的过程中误伤了大量其他无辜用户)。不要因为你图省事的想法牵连无辜的陌生人。</p></div><p>有着闲心还不如用上一条的免费防御,虽然速度慢一点</p><h4 id="更换-ip" tabindex="-1">更换 IP <a class="header-anchor" href="#更换-ip" aria-label="Permalink to &quot;更换 IP&quot;">​</a></h4><p>攻击者需要服务器的 IP 地址才能攻击。</p><p>可以不断的更换 IP 地址，打死一个换一个。</p><p>还可以使用动态DNS (DDNS)，换 IP 还能顺便更新 DNS 记录。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>如果你使用的是腾讯云之类的大厂 VPS ，永远不要尝试硬扛 DDOS ，服务器受攻击流量超过其机房黑洞阈值时，VPS 会屏蔽服务器的外网访问，直接断网并且恢复时间未知。</p></div><h4 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h4><p>IPv4 地址的数量是极其有限的， 不管是租赁还是托管， 服务商通常不会允许你频繁更换 IP 地址（或者得加钱）。</p><p>正如前一个方法所言， 攻击者需要服务器的 IP 地址才能攻击。但如果我们可以把服务器的地址藏起来呢？</p><p>额外租赁一些低价的云服务器做反向代理， 所有需要访问源服务器的玩家， 都需要通过反向代理才可访问。这会提升一定的延迟， 但总比被攻击时进不去服务器要强吧？</p><p>依此， 我们定义源服务器为「源站」， 用于反向代理的低价服务器为「节点」。</p><p>这些「节点」由此变为「源站」的挡箭牌， 替服务器阻挡攻击流量， 只要攻击者没有找到源站的IP， 你的服务器就是相对安全的。<br> 作为替代，你的节点会承受攻击， 达到阈值依然会导致玩家无法进服， 此方法仅可让你在攻击下可快速恢复访问， 而无需等待黑洞封禁时间结束。</p><p>使用这个方法，需要你能找到满足以下特点的云服务器来作为节点， 条件可能较为苛刻， 没有高防服务器那么烧钱但价格也不太便宜。</p><ul><li>在中国大陆境内 (尤为重要，除非你想玩家延迟 <code>200ms+</code>)</li><li>稳定</li><li>相对便宜</li><li>带宽相对较高</li></ul><p>可用于制作反向代理的软件有 <code>hopper-rs</code>、<code>nginx</code>、<code>haproxy</code> 等等， 配置正确的情况下， 反向代理会进行 IP 地址转发， 不会导致服务器显示的玩家 IP 全部为同一个 IP 地址。<br> 有条件最好自行制作一个快捷安装脚本， 以便在节点因攻击被断网时， 可快速地再租一台节点服务器部署反向代理。</p>',18)),a(d)])}const v=p(h,[["render",b]]);export{C as __pageData,v as default};

import{_ as p,c as t,a5 as e,o as i}from"./chunks/framework.O9ad3XaM.js";const n="/assets/114514.ClBDkpXY.png",r="/assets/dian-new.Biu9MOjd.png",l="/assets/xingjianxiangm.D6GBOkD_.png",s="/assets/add.Bceva14g.png",o="/assets/add-web.DgbFecss.png",c="/assets/origin.CZbjgHGB.png",h="/assets/tianjiahuiy._4nQ1sBC.png",d="/assets/tianjiazdy.CV-MNzg6.png",g="/assets/zidingy.DodJtMYr.png",m="/assets/close-yellow-cloud.COW7j6-y.png",u="/assets/xn-login.DVNkBHU3.png",b="/assets/wenjianguanli.DdsnhjZU.png",_="/assets/shangcwenjian.BCMNrosO.png",k="/assets/jieyazip.DYEvA4bE.png",f="/assets/ymguanli.Dau5O0ZE.png",x="/assets/tianxym.ezMbx3Vo.png",q="/assets/baotadianj.CdNltpCP.png",v="/assets/mysql.CQ9OKK6C.png",w="/assets/dianji.MtTnNmIk.png",C="/assets/removeindex.D9DA_R_6.png",P="/assets/upload.C_cii7Z7.png",N="/assets/unzip.BbxpeHR6.png",y="/assets/install.CHqLvXCw.png",E="/assets/api.Cgq0givd.png",D="/assets/index.Coby2jMA.png",A="/assets/vercel-login.EPofaV59.png",I="/assets/add-new.1DqMohUZ.png",M="/assets/choose-second.C-iCalOu.png",j="/assets/dom.Dg8yRj2l.png",B="/assets/cname.BWxo3h3U.png",H=JSON.parse('{"title":"搭建官网","description":"","frontmatter":{"title":"搭建官网","sidebar_position":8},"headers":[],"relativePath":"advance/open-website.md","filePath":"nitwikit/docs/advance/open-website.md","lastUpdated":1731744674000}'),G={name:"advance/open-website.md"};function W(S,a,z,R,O,F){return i(),t("div",null,a[0]||(a[0]=[e('<h1 id="搭建官网" tabindex="-1">搭建官网 <a class="header-anchor" href="#搭建官网" aria-label="Permalink to &quot;搭建官网&quot;">​</a></h1><h2 id="使用-github-cloudflare-saas-回源" tabindex="-1">使用 Github + Cloudflare saas 回源 <a class="header-anchor" href="#使用-github-cloudflare-saas-回源" aria-label="Permalink to &quot;使用 Github + Cloudflare saas 回源&quot;">​</a></h2><p>如果无法正常访问 Github 或 Cloudflare，请使用 <a href="https://steampp.net" target="_blank" rel="noreferrer">Watt Toolkit</a></p><h3 id="_0-要准备的" tabindex="-1">0. 要准备的 <a class="header-anchor" href="#_0-要准备的" aria-label="Permalink to &quot;0\\. 要准备的&quot;">​</a></h3><p>主域名，回源域名</p><h3 id="_1-注册一个github账号" tabindex="-1">1. 注册一个github账号 <a class="header-anchor" href="#_1-注册一个github账号" aria-label="Permalink to &quot;1\\. 注册一个github账号&quot;">​</a></h3><p>进入github.com，点击sign up</p><p><img src="'+n+'" alt="114514.png"></p><p>进入后按照提示完成注册(看不懂自己用翻译)</p><p>进入主页后点击左上的new(绿色的)</p><p><img src="'+r+'" alt="屏幕截图 2024-09-16 082239.png"></p><p>会跳转到一个界面</p><p>Repository name填 你的用户名.github.io</p><p>如果不会git的话就勾选Add a README</p><p>然后点Create repository <img src="'+l+'" alt="微信图片_20240916082548.png"></p><p>会直接到创建的项目主页</p><p>点Add file 会出来两个选项点Upload files</p><p><img src="'+s+'" alt="微信图片_20240916082915.png"></p><p>会来到上传界面，上传你的网站源码(首页的名字要改成index)</p><p>上传完后点Commit changes</p><p><img src="'+o+'" alt="微信图片_20240916083119.png"></p><p>然后你访问 你的用户名.github.io就可以访问了</p><p>如果你做到这一步至此你的网站已经是搭建完成了。但是由于某些特别的原因，大陆访问 Github Pages 服务比较困难。为了保证不懂技术的普通玩家们顺利访你的服务器官网，可以选择以下方式</p><h3 id="_2-cloudflare-saas回源" tabindex="-1">2.cloudflare saas回源 <a class="header-anchor" href="#_2-cloudflare-saas回源" aria-label="Permalink to &quot;2\\.cloudflare saas回源&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意!如果想要域名访问要先在github项目的settings-pages-Custom domain 添加域名</p></div><p>先将你的回源域名绑定到cloudflare</p><p>然后创建一个DNS记录</p><p>类型填CNAME 名称填origin 内容填你刚刚搭建完的网站</p><p>你的用户名.github.io 选择开启小黄云 点保存</p><p><img src="'+c+'" alt="微信图片_20240916091413.png"></p><p>然后来到ssl/tls-自定义主机名</p><p>然后选择开通，如果它提示你要绑卡的话，如果你没有卡，你可以上闲鱼买一个15块的代绑</p><p>开通完成后，先在回退源那输入你刚刚创建的DNS记录origin.你的回源域名 <img src="'+h+'" alt="微信图片_20240916091834.png"></p><p>等待到那里显示生效后 点击添加自定义主机名 <img src="'+d+'" alt="微信图片_20240916092036.png"></p><p>自定义主机名填你的用来开网站的域名</p><p>填完后点击添加 <img src="'+g+'" alt="微信图片_20240916092238.png"></p><p>然后按照提示完成txt授权</p><p>然后回到DNS记录</p><p>添加一个类型为 CNAME 名称为cdn 内容为 cf-cname.xingpingcn.top 不需要开启小黄云 <img src="'+m+'" alt="微信图片_20240916092435.png"></p><p>然后来到你的主域名 添加DNS记录</p><p>添加一个类型为CNAME 名称为输入你刚刚在自定义主机名时输入的前缀 内容为cdn.你的回源域名</p><p>并等待DNS记录生效，生效后就可以正常使用你的域名访问了</p><h2 id="使用服务器搭建" tabindex="-1">使用服务器搭建 <a class="header-anchor" href="#使用服务器搭建" aria-label="Permalink to &quot;使用服务器搭建&quot;">​</a></h2><h3 id="备案" tabindex="-1">备案 <a class="header-anchor" href="#备案" aria-label="Permalink to &quot;备案&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>不要使用自己家里的宽带搭建服务器官网！由于家宽无固定 IP，无法进行备案。目前已有因使用家宽建站而受到运营商警告的案例，详见 <a href="https://www.zhihu.com/question/440645939/answer/3228728304" target="_blank" rel="noreferrer">https://www.zhihu.com/question/440645939/answer/3228728304</a></p></div><p>信息产业部在第十二次部务会议审议通过《非经营性互联网信息服务备案管理办法》条例，要求在国内提供非经营性互联网信息服务，应当办理备案。</p><p>根据《非经营性互联网信息服务备案管理办法》，在中华人民共和国境内提供非经营性互联网信息服务，应当办理备案。未经备案，不得在中华人民共和国境内从事非经营性互联网信息服务。而对于没有备案的网站将予以罚款和关闭。</p><p>也就是说，使用位于大陆的服务器建站必须进行备案（ICP）。如果你拥有海外地区的服务器，你可以直接使用这类服务器建站或使用它们为你的服务器搭建反向代理如内网穿透，不再需要备案了。</p><h4 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h4><p>要为网站备案，需要进行以下准备：</p><ol><li>一台拥有固定 IP 的云服务器，或一条拥有固定 IP 的商用宽带</li><li>已经实名认证、用于网站访问的域名</li><li>服务器的经营许可证等相关证件或自己的身份证等证件。</li></ol><h4 id="备案类型" tabindex="-1">备案类型 <a class="header-anchor" href="#备案类型" aria-label="Permalink to &quot;备案类型&quot;">​</a></h4><p>备案类型分为企业备案和个人备案。其中个人备案限制较多，如果你的服务器规模较大、网站功能较多，你需要尽可能进行企业备案。</p><p>但是企业备案较为繁琐，需要较长时间，并提供包括企业的法人身份证明、营业执照、组织机构代码证等基础资料，还需要提供负责人信息、经营许可证等其他材料。</p><p>如果服务器网站规模较小，例如仅作展示作用，或者服务器没有条件办理经营许可证等，你需要进行个人备案。个人备案只需个人有效证件（如身份证）、联系方式和通信地址等相关信息即可。</p><h4 id="备案流程" tabindex="-1">备案流程 <a class="header-anchor" href="#备案流程" aria-label="Permalink to &quot;备案流程&quot;">​</a></h4><p>如果是大厂服务器，如腾讯阿里华为云，可以直接在服务商网站上自助进行备案。前往相关页面，根据指引填写相关信息并提交即可。</p><p>提交后，需要经过一段时间的审核，全程在 1 到 22 天。部分服务器运营商会自行先对你的信息进行审核，确保其能够顺利通过管局审核后再提交到管局。审核通过后，你将会获得 <strong>ICP 备案号</strong>作为服务器官网的备案证明。</p><p>备案通过后网站上线时，你需要根据相关规定在网站上标注备案信息。并链接至工信部备案网址 <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noreferrer">http://www.beian.miit.gov.cn</a> 供用户查询。技术上可通过以下方法实现：</p><p>在网站首页的 html 文件中，在<code>&lt;body&gt;</code>标签内最底部添加以下代码：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.beian.miit.gov.cn/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;备案号&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>你可以参考其他各大网站的格式来设计展示备案号的方案。</p><p>你可以通过 CSS、<code>&lt;div&gt;</code>标签来对备案信息进行美化。通常在 CSS 中将此 a 标签的<code>text-decoration</code>属性设置为<code>none</code>来防止其显示为蓝色带下划线的格式即可。</p><h3 id="在-linux-系统上搭建网站服务" tabindex="-1">在 Linux 系统上搭建网站服务 <a class="header-anchor" href="#在-linux-系统上搭建网站服务" aria-label="Permalink to &quot;在 Linux 系统上搭建网站服务&quot;">​</a></h3><p>以ubuntu为例</p><p>在控制台输入apt install nginx</p><p>然后找到var-www-html将网站源码上传上去</p><p>随后在 nginx 安装目录中执行 <code>./nginx</code> 即可运行服务。</p><p>为了保证网站时刻开启，建议为 nginx 设置开机自启。</p><h3 id="在-windows-系统上搭建网站服务" tabindex="-1">在 Windows 系统上搭建网站服务 <a class="header-anchor" href="#在-windows-系统上搭建网站服务" aria-label="Permalink to &quot;在 Windows 系统上搭建网站服务&quot;">​</a></h3><p>在浏览器中输入 <a href="https://nginx.org/en/" target="_blank" rel="noreferrer">https://nginx.org/en/</a></p><p>然后点击右边的download</p><p>进入后点击你电脑适合的版本</p><p>选择下载要下载带有windows这个词的</p><p>下载完之后解压文件</p><p>解压后进入文件夹，找到名字为html的文件夹</p><p>将你的源码上传上去。记住先把原来里面的文件给删掉再放</p><p>然后双击启动nginx.exe</p><p>为了保证网站时刻开启，建议为 nginx 设置开机自启。</p><h3 id="使用虚拟主机搭建网站服务" tabindex="-1">使用虚拟主机搭建网站服务 <a class="header-anchor" href="#使用虚拟主机搭建网站服务" aria-label="Permalink to &quot;使用虚拟主机搭建网站服务&quot;">​</a></h3><p>如果你没有用来建站的服务器，或者前面的不用服务器的方法对你来说实在是太难，可以尝试一下</p><p>接触过租服务器的一般都会知道有一些idc的网站里面有一些叫做虚拟主机的东西 那么那是什么？那是用来开网站的，在我看来，如果你是一个新手服主的话，我的建议就是使用虚拟主机搭建网站</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你的域名没有备案的话，请不要购买国内的虚拟主机(因为工信部为了打击不良网站，所以只要在国内的虚拟主机或服务器要进行建站的话，域名需要备案)</p></div><p>以<a href="https://starxn.com/" target="_blank" rel="noreferrer">星辰云</a>的虚拟主机为例</p><p>购买后点击一键登录进入面板 <img src="'+u+'" alt="微信图片_20240921113640.png"></p><p>进入后点击文件管理</p><p><img src="'+b+'" alt="微信图片_20240921113814.png"></p><p>点击上传上传源码 <img src="'+_+'" alt="微信图片_20240921114159.png"></p><p>然后点击解压 <img src="'+k+'" alt="微信图片_20240921114409.png"></p><p>然后将解压出来的文件夹里面的源码全部复制出来</p><p>然后来到域名管理 <img src="'+f+'" alt="微信图片_20240921114622.png"></p><p>在添加域名那里输入你自己的域名 <img src="'+x+'" alt="微信图片_20240921114806.png"></p><p>然后按照上面的域名解析解析好之后你就可以访问你的域名，看到你的网站了</p><p>在这里附上源码下载<a href="https://b2.mcdogserver.top/1.zip" target="_blank" rel="noreferrer">点击下载</a></p><p>如果你觉得这个源码不适合你，或者是你不想用别人的源码，你可以尝试去自学。这里就不附上自学的教程了</p><h2 id="使用namelessmc搭建网站服务" tabindex="-1">使用NamelessMC搭建网站服务 <a class="header-anchor" href="#使用namelessmc搭建网站服务" aria-label="Permalink to &quot;使用NamelessMC搭建网站服务&quot;">​</a></h2><h3 id="使用宝塔面板搭建" tabindex="-1">使用宝塔面板搭建 <a class="header-anchor" href="#使用宝塔面板搭建" aria-label="Permalink to &quot;使用宝塔面板搭建&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你的域名没有备案的话，请不要购买国内的服务器(因为工信部为了打击不良网站，所以只要在国内的虚拟主机或服务器要进行建站的话，域名需要备案)</p></div><h4 id="要准备的" tabindex="-1">要准备的 <a class="header-anchor" href="#要准备的" aria-label="Permalink to &quot;要准备的&quot;">​</a></h4><p>namelessmc的配置要求原文要求的是</p><p>PHP 7.4、8.0或8.1（推荐），具有以下扩展：</p><ul><li>php curl</li><li>php-exif</li><li>php-gd支持png和jpeg</li><li>php mbstring</li><li>php-mysql或php-mysqlnd</li><li>php pdo</li><li>php xml 还有 MySQL 5.7.22 或更高 或 MariaDB 10.2 或更高</li></ul><p>还有一台安装了 Apache 或 NGINX 或 Caddy 的服务器</p><p>这些宝塔面板都有</p><h4 id="正式开始" tabindex="-1">正式开始 <a class="header-anchor" href="#正式开始" aria-label="Permalink to &quot;正式开始&quot;">​</a></h4><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>接下来的教程都默认你安装了所有依赖和有公网ip</p></div><p>先在网站-php项目点添加站点 <img src="'+q+'" alt=""> 然后按以下选择 <img src="'+v+'" alt=""></p><p>创建完成后点图片圈的地方 <img src="'+w+'" alt=""></p><p>然后删除默认文件 <img src="'+C+'" alt=""> 然 后上传源文件<a href="https://b2.mcdogserver.top/nameless-deps-dist.zip" target="_blank" rel="noreferrer">点击下载</a><img src="'+P+'" alt=""></p><p>然后解压 <img src="'+N+'" alt=""></p><p>然后将文件夹的东西复制到根目录</p><p>然后访问你的公网ip来到安装界面 <img src="'+y+'" alt=""></p><p>然后点击Continue 下一步</p><p>然后按照提示完成安装</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>有时候安装完之后可能会识别不出来重启一下php就可以解决了，有一点提醒:数据库名字一定要为namelessmc否则会无法下一步</p></div><p>完成后会跳转到仪表盘，然后记得去把API开一下，到时候可以直接和你的MC服务器连接 <img src="'+E+'" alt=""></p><p>然后它会出现连接地址和API密钥，到时候输入你插件的配置文件里面就可以实现联通了，这里就不做演示了</p><p>然后主页面就长这样子 <img src="'+D+'" alt=""></p><p>如果你看到这个界面那么如果你是第1次使用宝塔面板搭建网站，那么恭喜你，你成功了</p><h2 id="使用-vercel-搭建网站服务" tabindex="-1">使用 vercel 搭建网站服务 <a class="header-anchor" href="#使用-vercel-搭建网站服务" aria-label="Permalink to &quot;使用 vercel 搭建网站服务&quot;">​</a></h2><p>此方法在我看来是最简单的方法，他的加载速度加上优选IP之后可以比cloudflare saas后还快(没有设置缓存的情况下)，而且比cloudflare saas要简单许多</p><p>如果你无法正常访问 vercel 请下载 <a href="https://steampp.net" target="_blank" rel="noreferrer">Watt Toolkit</a> 并在最下面的其他服务内勾选的加速vercel.app</p><h3 id="要准备的东西" tabindex="-1">要准备的东西 <a class="header-anchor" href="#要准备的东西" aria-label="Permalink to &quot;要准备的东西&quot;">​</a></h3><ul><li>一个 Github 账号</li><li>一个邮箱</li></ul><h3 id="注册-vercel-账号" tabindex="-1">注册 vercel 账号 <a class="header-anchor" href="#注册-vercel-账号" aria-label="Permalink to &quot;注册 vercel 账号&quot;">​</a></h3><p>首先进入<a href="https://vercel.com" target="_blank" rel="noreferrer">vercel</a></p><p>然后可以点击图片上的这两个，那个黑色的是注册那个圈起来的白色的是登录，如果你已经有了github账号可以直接登录 <img src="'+A+'" alt=""></p><p>登录完之后去 Github 新建一个仓库，上传你的网站源码(这里前面讲过如何新建仓库并上传源码，这里就不讲了)</p><p>上传完之后在 vercel 里的主页，点击 add new <img src="'+I+'" alt=""></p><p>然后选择第2个 <img src="'+M+'" alt=""></p><p>进入之后找到你刚刚创建并上传了源码的仓库，然后点击那个仓库旁的 import ，然后再点 deploy</p><p>然后耐心等待构建完成</p><p>完成之后，点击最下面那个黑色的按钮</p><p>然后来到管理网站的仪表盘然后点击 settings-domains <img src="'+j+'" alt=""></p><p>然后再最上面的那个框那里输入你要绑定的域名，然后点击 add <img src="'+s+'" alt=""></p><p>这时他会提示你要添加一个 cname 记录，千万不要使用这个地址，要使用其他人制作的优选IP 优选IP是vercel.182682.xyz <img src="'+B+'" alt=""></p><p>添加完之后等待它自动检查检查完成并签发完证书之后然后访问你绑定的域名就可以访问到你的网站了</p><h3 id="一些弊端" tabindex="-1">一些弊端 <a class="header-anchor" href="#一些弊端" aria-label="Permalink to &quot;一些弊端&quot;">​</a></h3><p>不知为何 vercel 在构建本站文档的时候，出现了一点奇怪的错误，我尝试了其他的构建网站可是都没有问题</p>',139)]))}const V=p(G,[["render",W]]);export{H as __pageData,V as default};

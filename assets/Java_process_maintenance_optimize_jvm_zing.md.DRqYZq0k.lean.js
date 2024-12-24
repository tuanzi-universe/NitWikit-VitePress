import{_ as a,c as o,a5 as t,o as i}from"./chunks/framework.O9ad3XaM.js";const m=JSON.parse('{"title":"Azul Zing","description":"","frontmatter":{"sidebar_position":6,"title":"Azul Zing","slug":"/optimize/jvm/zing"},"headers":[],"relativePath":"Java/process/maintenance/optimize/jvm/zing.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/jvm/zing.md","lastUpdated":1727754229000}'),n={name:"Java/process/maintenance/optimize/jvm/zing.md"};function l(r,e,s,p,c,d){return i(),o("div",null,e[0]||(e[0]=[t('<h1 id="azul-zing" tabindex="-1">Azul Zing <a class="header-anchor" href="#azul-zing" aria-label="Permalink to &quot;Azul Zing&quot;">​</a></h1><p>通用内容的参数可以使用(比如大页)，但不要自行指定GC，或其他优化参数</p><h2 id="一步到位" tabindex="-1">一步到位 <a class="header-anchor" href="#一步到位" aria-label="Permalink to &quot;一步到位&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-XX:ProfileLogIn=readynow -XX:ProfileLogOut=readynow -XX:+FalconUseCompileStashing -XX:+CompactStrings</span></span></code></pre></div><p>勇者加上<code>-XX:FalconOptimizationLevel=3</code></p><p>安装了 ZST 加上<code>-XX:+UseZST</code></p><h2 id="readynow" tabindex="-1">ReadyNow <a class="header-anchor" href="#readynow" aria-label="Permalink to &quot;ReadyNow&quot;">​</a></h2><p>你大概已经注意到了，Zing的预热期很长，ReadyNow就是来解决这个问题的</p><p>若要启用 ReadyNow，请添加以下命令行选项，其中两者<code>&lt;file&gt;</code>通常相同：</p><p><code>-XX:ProfileLogIn=&lt;file&gt;</code> 指示 Azul Platform Prime 使用现有配置文件日志中的信息。</p><p><code>-XX:ProfileLogOut=&lt;file&gt;</code> 记录之前的编译和运行中的去优化决策。</p><p>然后，运行应用程序将自动生成或更新配置文件日志。此配置文件日志将在应用程序的后续运行时使用，从而改进预热。</p><p>官方推荐所有重要函数执行<strong>5万遍</strong></p><p>添加<code>-XX:+FalconUseCompileStashing</code>以使用编译存储</p><h2 id="垃圾回收器" tabindex="-1">垃圾回收器 <a class="header-anchor" href="#垃圾回收器" aria-label="Permalink to &quot;垃圾回收器&quot;">​</a></h2><p>C4 是 Zing 中唯一的垃圾收集器，取代了 OpenJDK 中可用的其他垃圾收集器。</p><h2 id="紧凑字符串" tabindex="-1">紧凑字符串 <a class="header-anchor" href="#紧凑字符串" aria-label="Permalink to &quot;紧凑字符串&quot;">​</a></h2><p>添加选项<code>-XX:+CompactStrings</code>可减少内存占用，提高字符串密集型应用程序的性能，并减少花费在垃圾回收上的时间</p><h2 id="更高级别的-falcon-优化" tabindex="-1">更高级别的 Falcon 优化 <a class="header-anchor" href="#更高级别的-falcon-优化" aria-label="Permalink to &quot;更高级别的 Falcon 优化&quot;">​</a></h2><p>使用选项<code>-XX:FalconOptimizationLevel=3</code>可以获得更高级别的优化，但会出现更多兼容性问题</p><h2 id="zing-system-tool" tabindex="-1">Zing System Tool <a class="header-anchor" href="#zing-system-tool" aria-label="Permalink to &quot;Zing System Tool&quot;">​</a></h2><p>这玩意可以让你的系统更加适应Zing，可以自动优化系统配置</p><p><a href="https://docs.azul.com/prime/zst/installation" target="_blank" rel="noreferrer">官方安装教程</a></p><p>使用<code>-XX:+UseZST</code> 开启</p>',24)]))}const g=a(n,[["render",l]]);export{m as __pageData,g as default};

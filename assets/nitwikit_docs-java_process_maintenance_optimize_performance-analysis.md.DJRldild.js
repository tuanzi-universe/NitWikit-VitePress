import{_ as r,c as e,a5 as t,o}from"./chunks/framework.O9ad3XaM.js";const k=JSON.parse('{"title":"性能分析","description":"","frontmatter":{"title":"性能分析","sidebar_position":5},"headers":[],"relativePath":"nitwikit/docs-java/process/maintenance/optimize/performance-analysis.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/performance-analysis.md","lastUpdated":1732915158000}'),p={name:"nitwikit/docs-java/process/maintenance/optimize/performance-analysis.md"};function s(i,a,l,c,n,h){return o(),e("div",null,a[0]||(a[0]=[t('<h1 id="性能分析" tabindex="-1">性能分析 <a class="header-anchor" href="#性能分析" aria-label="Permalink to &quot;性能分析&quot;">​</a></h1><p>性能分析是一切&quot;优化&quot;的依据。如果你不知道服务器导致卡顿的元凶，那么将毫无意义。</p><h2 id="spark" tabindex="-1">Spark <a class="header-anchor" href="#spark" aria-label="Permalink to &quot;Spark&quot;">​</a></h2><p>Spark是一个Minecraft的性能分析器，支持广泛(如 Bukkit，BungeeCord，Velocity，Forge，Fabric 等)。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>官网</code> :<a href="https://spark.lucko.me" target="_blank" rel="noreferrer">https://spark.lucko.me</a></p><p><code>SpigotMC</code> <a href="https://www.spigotmc.org/resources/spark.57242/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/spark.57242/</a></p><p><code>Modrinth</code> <a href="https://modrinth.com/mod/spark" target="_blank" rel="noreferrer">https://modrinth.com/mod/spark</a></p><p><code>GitHub</code> <a href="https://github.com/lucko/spark" target="_blank" rel="noreferrer">https://github.com/lucko/spark</a></p><p><code>文档(英文)</code> <a href="https://spark.lucko.me/docs" target="_blank" rel="noreferrer">https://spark.lucko.me/docs</a></p><p><code>文档(中文)</code> <a href="https://snowcutieowo.github.io/spark/README.html" target="_blank" rel="noreferrer">https://snowcutieowo.github.io/spark/README.html</a></p></div><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><p>插件服和 1.13 以上的 mod 服请下载插件版本并将 Spark.jar 文件插件放到服务端的 plugins 文件夹中。</p><p>1.12.2 和以下混合服优先使用 mod 版本，放入 mods 文件夹。</p><p>对于 Purpur Fork 服务器或 Paper 1.21+，默认自带 Spark，无需单独下载。</p><h4 id="spark-profiler" tabindex="-1">/spark profiler <a class="header-anchor" href="#spark-profiler" aria-label="Permalink to &quot;/spark profiler&quot;">​</a></h4><p>如果分析器已经启动，你可以输入下面这些命令：</p><p>/spark profiler open 打开分析报告页而无需停止；</p><p>/spark profiler stop 停止分析并浏览分析结果；</p><p>/spark profiler cancel 取消分析操作，并取消上传报告。</p><p>在其他情况下，你可以使用这些基本的操作命令：</p><p>/spark profiler start 在默认操作模式下开始分析；</p><p>/spark profiler info 检查当前分析的状态。</p><p>这是主要的指令，为了更多的功能，更精准的分析等可以在后面加上参数.具体请查看 <a href="https://snowcutieowo.github.io/spark/#/spark.command-usage" target="_blank" rel="noreferrer">profiler 指令使用方法</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Spark 中内存占用并非平均内存占用，而是<strong>瞬间内存占用</strong>，所以有些时候会出现 Spark 上显示内存占用小实际很大的情况</p></div><h4 id="spark-health" tabindex="-1">/spark health <a class="header-anchor" href="#spark-health" aria-label="Permalink to &quot;/spark health&quot;">​</a></h4><p>子命令 health 会产生一份服务器的健康报告，其中包含 TPS、CPU、内存和硬盘的使用情况。</p><h4 id="spark-tps" tabindex="-1">/spark tps <a class="header-anchor" href="#spark-tps" aria-label="Permalink to &quot;/spark tps&quot;">​</a></h4><p>Spark 默认会替代服务器的 TPS 输出(但可能被 CMI 等插件覆盖，请关闭CMI的/tps指令或者输入完整 <code>/spark tps</code> 获取)。</p><h2 id="timings" tabindex="-1">Timings <a class="header-anchor" href="#timings" aria-label="Permalink to &quot;Timings&quot;">​</a></h2><p>Timings是一个 Paper 自带的性能分析器，由于其监听每一个事件，性能开销比较大，</p><p>在很多服务器核心(如 Purpur 等)本身也是被移除的，<strong>不推荐</strong>。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在可预见的未来Timings将会被移除，作为新手可以直接跳过。如果你使用Paper服务器，请禁用Timings！虽然它是一个很好的诊断工具，</p><p>但由于其不断不断启动和停止虚拟“秒表”，会对性能产生非常大的影响。因此无论服务器规模大小只需禁用计时即可实现 <em>10-30%</em> 的性能提升。</p><p>可以通过在 <code>/config/paper-global.yml</code> 中 <code>timings.enabled</code> 设为 <code>false</code> 禁用。</p></div><h2 id="其他软件分析" tabindex="-1">其他软件分析 <a class="header-anchor" href="#其他软件分析" aria-label="Permalink to &quot;其他软件分析&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这部分需要一些基础知识，一般 Spark 分析不出来才会尝试其他软件。<em>一般服主不必要学习这部分内容</em>。</p></div><h3 id="arthas" tabindex="-1">arthas <a class="header-anchor" href="#arthas" aria-label="Permalink to &quot;arthas&quot;">​</a></h3><p>Arthas 是一款阿里巴巴开发的在线性能分析软件，可实时查看应用 JVM /内存/ GC /线程 的状态信息，甚至包括查看方法调用的出入参、异常，监测方法执行耗时等，一般用于排查某些插件的CPU占用情况和插件线程占用分析。</p><p><a href="https://arthas.aliyun.com/doc/" target="_blank" rel="noreferrer">官方文档链接</a></p><h3 id="jprofiler" tabindex="-1">jprofiler <a class="header-anchor" href="#jprofiler" aria-label="Permalink to &quot;jprofiler&quot;">​</a></h3><p>jprofiler 是一款付费的易用的性能分析软件，甚至可以对 MySQL ，内存泄漏进行分析，可视化展示。</p><p><a href="https://www.ej-technologies.com/products/jprofiler/overview.html" target="_blank" rel="noreferrer">官方链接</a></p>',35)]))}const m=r(p,[["render",s]]);export{k as __pageData,m as default};

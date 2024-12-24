import{_ as a,c as t,a5 as i,o as s}from"./chunks/framework.O9ad3XaM.js";const l="/assets/remove-item.CeugLCIv.png",o="/assets/checkitem.BnwxBUrm.png",n="/assets/%E7%8E%A9%E5%AE%B6%E8%83%8C%E5%8C%85%E6%A7%BD%E4%BD%8D%E5%9B%BE.BgCz7pub.webp",p="/assets/getinfo_1.CxxyuaU-.png",c="/assets/getinfo_2.Cn0FlZx6.png",v=JSON.parse('{"title":"CheckItem","description":"","frontmatter":{"title":"CheckItem","sidebar_position":4},"headers":[],"relativePath":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem.md","filePath":"nitwikit/docs-java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem.md","lastUpdated":1730974396000}'),d={name:"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem.md"};function r(h,e,m,g,k,u){return s(),t("div",null,e[0]||(e[0]=[i(`<h1 id="checkitem" tabindex="-1">CheckItem <a class="header-anchor" href="#checkitem" aria-label="Permalink to &quot;CheckItem&quot;">​</a></h1><h2 id="有关-checkitem-的相关链接" tabindex="-1">有关 CheckItem 的相关链接 <a class="header-anchor" href="#有关-checkitem-的相关链接" aria-label="Permalink to &quot;有关 CheckItem 的相关链接&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>eCloud</code> <a href="https://api.extendedclip.com/expansions/checkitem/" target="_blank" rel="noreferrer">https://api.extendedclip.com/expansions/checkitem/</a></p><p><code>Placeholder List</code> <a href="https://wiki.placeholderapi.com/users/placeholder-list/#checkitem" target="_blank" rel="noreferrer">https://wiki.placeholderapi.com/users/placeholder-list/#checkitem</a></p><p><code>GitHub</code> <a href="https://github.com/PlaceholderAPI/CheckItem-Expansion" target="_blank" rel="noreferrer">https://github.com/PlaceholderAPI/CheckItem-Expansion</a></p></div><h2 id="安装此扩展" tabindex="-1">安装此扩展 <a class="header-anchor" href="#安装此扩展" aria-label="Permalink to &quot;安装此扩展&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi ecloud download CheckItem</span></span>
<span class="line"><span>/papi reload</span></span></code></pre></div><h2 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-label="Permalink to &quot;教程&quot;">​</a></h2><p><img src="`+l+'" alt=""></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi parse me %checkitem_remove_diamond%</span></span></code></pre></div><p>在 <a href="#启用give和remove">启用give和remove</a> 后，跑一下图中的变量会收取玩家所有的钻石</p><p>变量中 <strong>remove</strong> 的位置在作者项目的 README 中，并没有名字，其实这个地方决定了这个变量的效果</p><p>如果没有 <strong>remove</strong> 那么这个变量就会判断玩家是否拥有这个物品</p><p><img src="'+o+'" alt=""></p><p>这里返回了 yes</p><p><a href="/docs-java/process/plugin/Front-Plugin/PlaceHolderAPI/outline#更改-boolean">如何返回 true/false ？</a></p><p>例如：</p><ul><li>give 给予物品 %checkitem_give_mat:diamond% // 给予玩家一个钻石</li><li>remove 收取物品 %checkitem_remove_mat:diamond% // 收取玩家背包中所有的钻石</li><li>amount 查看数量 %checkitem_amount_mat:diamond% // 查看玩家背包中的钻石数量</li><li>getinfo 物品信息 下面会讲到</li></ul><p>你应该注意到了 <code>mat:diamond</code> ，因为我写了diamond所以这些变量的功能是针对钻石的</p><blockquote><p>mat是 material 的缩写</p></blockquote><p>像 <code>mat</code> 被称为 <strong>修饰符(modifier)</strong></p><p>用来更详细的指明你需要的操作</p><p>例如：<code>%checkitem_remove_mat:diamond,amt:10%</code></p><p>作用是收取10个钻石</p><blockquote><p>amt是 amount 的缩写</p></blockquote><p>:::note</p><p>不同修饰符使用英文逗号“，”来连接</p><p>如同上面的 <code>%checkitem_remove_mat:diamond,amt:10%</code></p><p>同时使用了 mat 和 amt 两个修饰符</p><p>:::</p><h3 id="修饰符" tabindex="-1">修饰符 <a class="header-anchor" href="#修饰符" aria-label="Permalink to &quot;修饰符&quot;">​</a></h3><p>可用的修饰符有：</p><ul><li>namecontains // 名字中包含</li><li>namestartswith</li><li>nameequals</li><li>mat // 物品材质</li><li>amt // 物品数量</li><li>data // 物品的data</li><li>custommodeldata // 物品的CMD值</li><li>lorecontains // lore中包含</li><li>loreequals</li><li>matcontains</li><li>enchantments // 附魔</li><li>enchanted</li><li>potiontype</li><li>potionextended</li><li>potionupgraded</li><li>strict</li><li>inhand</li><li>inslot</li><li>nbtstrings // nbt</li><li>nbtints</li></ul><h3 id="getinfo" tabindex="-1">getinfo <a class="header-anchor" href="#getinfo" aria-label="Permalink to &quot;getinfo&quot;">​</a></h3><p>用来获取玩家指定背包位置的物品信息</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%checkitem_getinfo:&lt;槽位&gt;_&lt;修饰符1&gt;,&lt;修饰符2&gt;,&lt;...&gt;%</span></span></code></pre></div><p>特别的，&lt;槽位&gt; 可以使用 <code>mainhand</code>（手持物品） 和 <code>offhand</code>（副手物品）</p><p>以及，<strong>修饰符</strong> 的 <code>:</code> 号也是需要写的，不过 <code>:</code> 之后写不写都一样</p><p>背包槽位可参考下图：</p><p><img src="'+n+'" alt=""></p><p>下方是使用案例</p><p><img src="'+p+'" alt=""></p><p><img src="'+c+`" alt=""></p><h3 id="例子-收取ia物品" tabindex="-1">例子：收取ia物品 <a class="header-anchor" href="#例子-收取ia物品" aria-label="Permalink to &quot;例子：收取ia物品&quot;">​</a></h3><p>收取指定ia物品的指定数量</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%checkitem_remove_nbtstrings:itemsadder..id..data=ia物品ID,amt:数量%</span></span></code></pre></div><p>使用了两个修饰符</p><ul><li>nbtstrings</li><li>amt</li></ul><p>其他物品库多数也会像ia一样给物品打上自己的nbt标签,照着改改就好</p><h2 id="启用give和remove" tabindex="-1">启用give和remove <a class="header-anchor" href="#启用give和remove" aria-label="Permalink to &quot;启用give和remove&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">expansions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  checkitem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    give_enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    remove_enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><p>将两个<code>false</code>改为<code>true</code> 接着 <code>/papi reload</code></p>`,50)]))}const _=a(d,[["render",r]]);export{v as __pageData,_ as default};

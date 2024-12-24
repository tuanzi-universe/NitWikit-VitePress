import{_ as o,c as p,a5 as s,o as a}from"./chunks/framework.O9ad3XaM.js";const m=JSON.parse('{"title":"权限组","description":"","frontmatter":{"title":"权限组","sidebar_position":3},"headers":[],"relativePath":"Java/process/plugin/ManageTool/Permission/Group.md","filePath":"nitwikit/docs-java/process/plugin/ManageTool/Permission/Group.md","lastUpdated":1727731002000}'),r={name:"Java/process/plugin/ManageTool/Permission/Group.md"};function t(l,e,n,c,i,d){return a(),p("div",null,e[0]||(e[0]=[s('<h1 id="权限组" tabindex="-1">权限组 <a class="header-anchor" href="#权限组" aria-label="Permalink to &quot;权限组&quot;">​</a></h1><p>与其单独为每个玩家设置权限，我们可以将权限捆绑为一组，然后直接将一大堆权限一起给予玩家。</p><p>比如我想让狗蛋拥有 <code>essentials.fly</code> 的权限，我可以直接新建一个权限组并添加权限，然后将狗蛋设置到此权限组。</p><p>首先让我们创建一个叫做 <code>NBplus</code> 的权限组。</p><p>运行 <code>/luckperms creategroup NBplus</code> 命令，这会创建一个名叫 <code>NBplus</code> 的空权限组。</p><p>接下来，运行 <code>/luckperms group NBplus permission set essentials.fly true</code>，将 fly 的权限添加到权限组里。</p><p>然后我们要把狗蛋加到这个权限组，运行 <code>/luckperms user GouDan parent add NBplus</code>。</p><p>成功了，狗蛋现在能上天了！</p><p><em><strong>默认权限组的权限有好多啊！我懒得重新加权限到新的权限组了，每次有更改还要一起改一大堆！怎么办？</strong></em></p><p>我们可以用到<strong>继承</strong>。</p><p>运行 <code>/luckperms group NBplus parent add default</code>，这样就能让 NBplus 权限组继承所有默认权限组中的权限。</p><p>更多请查看：<a href="https://izzelaliz.gitbooks.io/luckperms-wiki/content/Usage.html" target="_blank" rel="noreferrer">Luckperms 中文教程</a></p>',12)]))}const g=o(r,[["render",t]]);export{m as __pageData,g as default};

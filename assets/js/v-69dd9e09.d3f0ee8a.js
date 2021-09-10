"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6137],{8291:function(a,n,s){s.r(n),s.d(n,{data:function(){return e}});const e={key:"v-69dd9e09",path:"/packages/",title:"简介",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"应用场景",slug:"应用场景",children:[]},{level:2,title:"创建一个 package",slug:"创建一个-package",children:[]},{level:2,title:"配置 package.json",slug:"配置-package-json",children:[]}],filePathRelative:"packages/README.md",git:{updatedTime:1631258794e3,contributors:[{name:"李旭",email:"461229187@qq.com",commits:1}]}}},9452:function(a,n,s){s.r(n),s.d(n,{default:function(){return i}});var e=s(6252);const t=(0,e._)("h1",{id:"简介",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),(0,e.Uk)(" 简介")],-1),p=(0,e.Uk)("X-BUILD 提供了一套基于 "),o={href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Lerna"),r=(0,e.Uk)(" 的包管理工具，它存在的理由不同于一个 npm 包，我们通常安装的 npm 包都具备非常高的通用性，针对业务需求我们再做二次开发，那么不同项目之间，我们可能已经复制过很多次同样的组件或功能代码，不同项目可能会有微调（需要修改代码），这点 npm 包就很难符合我们的业务需求。"),c=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">为什么不直接放在模板中？</p><p>模板内提供了非常基础和核心的功能，基本可以覆盖所有项目，更多的场景下，我们的包很难复用到每一项目，那么我们独立管理，按需安装的方式会更加合理。</p><p>脚手架提供的功能只是让你更加方便的管理包和更方便的安装包。</p></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>为了提升效率，不再是复制粘贴代码，脚手架提供了以下的使用场景，更方便的管理你的每一个包：</p><ul><li>使用脚手架提供的 add 指令，在选项列表中选择你的包（可多选）。</li><li>拷贝包内的源码到相应的路径。</li><li>在项目中安装已选中的包所需的所有依赖。</li></ul><p>脚手架仅提供一些常用的 package，如果你想将自己的包加入到脚手架，你需要 fork X-BUILD 源码，以本脚手架为基础，创建一个属于你的脚手架。</p><h2 id="创建一个-package" tabindex="-1"><a class="header-anchor" href="#创建一个-package" aria-hidden="true">#</a> 创建一个 package</h2><p>你可以使用以下命令创建一个新的 package：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lerna create <span class="token punctuation">[</span>package<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>所有的包在 <code>packages/</code> 目录下管理。</p><h2 id="配置-package-json" tabindex="-1"><a class="header-anchor" href="#配置-package-json" aria-hidden="true">#</a> 配置 package.json</h2><p>创建包后，会自动生成 package.json 你需要添加或修改以下 2 个字段：</p><ul><li>description: 包的介绍，在使用 <code>x add</code> 命令时的选项提示。</li><li>dest: 将 src 目录下的文件拷贝的目标路径。</li></ul><p>示例：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hook-loading&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hook - 加载状态&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/hooks&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',14);var i={render:function(a,n){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",o,[l,(0,e.Wm)(s)]),r]),c],64)}}}}]);
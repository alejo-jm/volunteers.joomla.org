/* jce - 2.7.7 | 2019-04-03 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){tinymce.create("tinymce.plugins.LinkPlugin",{init:function(ed,url){function isLink(n){return!!n&&(n=ed.dom.getParent(n,"A"),n&&isAnchor(n)===!1)}function isAnchor(n){return ed.dom.hasClass(n,"mce-item-anchor")}this.editor=ed,this.url=url,ed.addCommand("mceLink",function(){var se=ed.selection,n=se.getNode();"A"!=n.nodeName||isAnchor(n)||se.select(n),ed.windowManager.open({file:ed.getParam("site_url")+"index.php?option=com_jce&task=plugin.display&plugin=link",width:600+ed.getLang("link.delta_width",0),height:600+ed.getLang("link.delta_height",0),inline:1,popup_css:!1},{plugin_url:url})}),ed.addButton("link",{title:"link.desc",cmd:"mceLink"}),ed.addShortcut("ctrl+k","link.desc","mceLink"),ed.onInit.add(function(){ed&&ed.plugins.contextmenu&&ed.plugins.contextmenu.onContextMenu.add(function(th,m,e){m.addSeparator(),m.add({title:"link.desc",icon:"link",cmd:"mceLink",ui:!0}),"A"!=e.nodeName||ed.dom.getAttrib(e,"name")||m.add({title:"advanced.unlink_desc",icon:"unlink",cmd:"UnLink"})})}),ed.onNodeChange.add(function(ed,cm,n,co){cm.setActive("link",isLink(n)),cm.setDisabled("link",isAnchor(n))})}}),tinymce.PluginManager.add("link",tinymce.plugins.LinkPlugin)}();
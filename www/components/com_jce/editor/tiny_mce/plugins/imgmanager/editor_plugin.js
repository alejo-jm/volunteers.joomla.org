/* jce - 2.6.24 | 2018-01-24 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2018 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){tinymce.create("tinymce.plugins.ImageManager",{init:function(ed,url){function isMceItem(n){var cls=ed.dom.getAttrib(n,"class","");return/mce-item-/.test(cls)}this.editor=ed,ed.addCommand("mceImageManager",function(){var n=ed.selection.getNode();"IMG"==n.nodeName&&isMceItem(n)||ed.windowManager.open({file:ed.getParam("site_url")+"index.php?option=com_jce&view=editor&plugin=imgmanager",width:780+ed.getLang("imgmanager.delta_width",0),height:640+ed.getLang("imgmanager.delta_height",0),inline:1,popup_css:!1},{plugin_url:url})}),ed.addButton("imgmanager",{title:"imgmanager.desc",cmd:"mceImageManager"}),ed.onNodeChange.add(function(ed,cm,n){cm.setActive("imgmanager","IMG"==n.nodeName&&!isMceItem(n))}),ed.onInit.add(function(){ed&&ed.plugins.contextmenu&&ed.plugins.contextmenu.onContextMenu.add(function(th,m,e){m.add({title:"imgmanager.desc",icon:"imgmanager",cmd:"mceImageManager"})})})},insertUploadedFile:function(o){var ed=this.editor,data=this.getUploadConfig();if(data&&data.filetypes&&new RegExp(".("+data.filetypes.join("|")+")$","i").test(o.file)){var args={src:o.file,alt:o.alt||o.name,style:{}},attribs=["alt","title","id","dir","class","usemap","style","longdesc"];if(o.styles){var s=ed.dom.parseStyle(ed.dom.serializeStyle(o.styles));tinymce.extend(args.style,s),delete o.styles}if(o.style){var s=ed.dom.parseStyle(o.style);tinymce.extend(args.style,s),delete o.style}return tinymce.each(attribs,function(k){"undefined"!=typeof o[k]&&(args[k]=o[k])}),ed.dom.create("img",args)}return!1},getUploadURL:function(file){var ed=this.editor,data=this.getUploadConfig();return!!(data&&data.filetypes&&new RegExp(".("+data.filetypes.join("|")+")$","i").test(file.name))&&ed.getParam("site_url")+"index.php?option=com_jce&view=editor&plugin=imgmanager"},getUploadConfig:function(){var ed=this.editor,data=ed.getParam("imgmanager_upload");return data},getInfo:function(){return{longname:"Image Manager",author:"Ryan Demmer",authorurl:"http://www.joomlacontenteditor.net",infourl:"http://www.joomlacontenteditor.net/index2.php?option=com_content&amp;task=findkey&amp;pop=1&amp;lang=en&amp;keyref=imgmanager.about",version:"@@version@@"}}}),tinymce.PluginManager.add("imgmanager",tinymce.plugins.ImageManager)}();
/* jce - 2.6.26 | 2018-01-31 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2018 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){var DOM=(tinymce.each,tinymce.util.Cookie,tinymce.DOM);tinymce.create("tinymce.plugins.KitchenSink",{init:function(ed,url){function toggle(){var row=DOM.getParents(ed.id+"_kitchensink",".mceToolbarRow");if(row){for(var n=DOM.getNext(row[0],".mceToolbarRow");n;)DOM.isHidden(n)?(DOM.setStyle(n,"display",""),state=!0):(DOM.hide(n),state=!1),n=DOM.getNext(n,".mceToolbarRow");h=s.height||el.style.height||el.offsetHeight,h&&DOM.setStyle(ed.id+"_ifr","height",h),ed.controlManager.setActive("kitchensink",state)}}var state=!1,h=0,el=ed.getElement(),s=ed.settings;ed.addCommand("mceKitchenSink",toggle),ed.addButton("kitchensink",{title:"kitchensink.desc",cmd:"mceKitchenSink"}),ed.onPostRender.add(function(ed,cm){return DOM.get("mce_fullscreen")?void(state=!0):void toggle()}),ed.onInit.add(function(ed){ed.controlManager.setActive("kitchensink",state)})},getInfo:function(){return{longname:"Kitchen Sink",author:"Ryan Demmer",authorurl:"http://www.joomlacontenteditor.net/",infourl:"http://www.joomlacontenteditor.net/",version:"@@version@@"}}}),tinymce.PluginManager.add("kitchensink",tinymce.plugins.KitchenSink)}();
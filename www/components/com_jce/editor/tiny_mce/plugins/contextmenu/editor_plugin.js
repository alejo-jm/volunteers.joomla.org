/* jce - 2.7.7 | 2019-04-03 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){var Event=tinymce.dom.Event,DOM=tinymce.DOM;tinymce.create("tinymce.plugins.ContextMenu",{init:function(ed){function hide(ed,e){return realCtrlKey=0,e&&2==e.button?void(realCtrlKey=e.ctrlKey):void(self._menu&&(self._menu.removeAll(),self._menu.destroy(),Event.remove(ed.getDoc(),"click",hideMenu),self._menu=null))}var showMenu,contextmenuNeverUseNative,realCtrlKey,hideMenu,self=this;self.editor=ed,contextmenuNeverUseNative=ed.settings.contextmenu_never_use_native;var isNativeOverrideKeyEvent=function(e){return e.ctrlKey&&!contextmenuNeverUseNative},isMacWebKit=function(){return tinymce.isMac&&tinymce.isWebKit};self.onContextMenu=new tinymce.util.Dispatcher(this),hideMenu=function(e){hide(ed,e)},showMenu=ed.onContextMenu.add(function(ed,e){(0!==realCtrlKey?realCtrlKey:e.ctrlKey)&&!contextmenuNeverUseNative||(Event.cancel(e),isMacWebKit()&&2===e.button&&!isNativeOverrideKeyEvent(e)&&ed.selection.isCollapsed()&&ed.selection.placeCaretAt(e.clientX,e.clientY),"IMG"==e.target.nodeName&&ed.selection.select(e.target),self._getMenu(ed).showMenu(e.clientX||e.pageX,e.clientY||e.pageY),Event.add(ed.getDoc(),"click",hideMenu),ed.nodeChanged())}),ed.onRemove.add(function(){self._menu&&self._menu.removeAll()}),ed.onMouseDown.add(hide),ed.onKeyDown.add(hide),ed.onKeyDown.add(function(ed,e){!e.shiftKey||e.ctrlKey||e.altKey||121!==e.keyCode||(Event.cancel(e),showMenu(ed,e))})},_getMenu:function(ed){var am,p,self=this,m=self._menu,se=ed.selection,col=se.isCollapsed(),el=se.getNode()||ed.getBody();return m&&(m.removeAll(),m.destroy()),p=DOM.getPos(ed.getContentAreaContainer()),m=ed.controlManager.createDropMenu("contextmenu",{offset_x:p.x+ed.getParam("contextmenu_offset_x",0),offset_y:p.y+ed.getParam("contextmenu_offset_y",0),constrain:1,keyboard_focus:!0}),self._menu=m,m.addSeparator(),am=m.addMenu({title:"contextmenu.align"}),am.add({title:"contextmenu.left",icon:"justifyleft",cmd:"JustifyLeft"}),am.add({title:"contextmenu.center",icon:"justifycenter",cmd:"JustifyCenter"}),am.add({title:"contextmenu.right",icon:"justifyright",cmd:"JustifyRight"}),am.add({title:"contextmenu.full",icon:"justifyfull",cmd:"JustifyFull"}),self.onContextMenu.dispatch(self,m,el,col),m}}),tinymce.PluginManager.add("contextmenu",tinymce.plugins.ContextMenu)}();
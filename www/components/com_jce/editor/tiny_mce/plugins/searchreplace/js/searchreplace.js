/* jce - 2.7.7 | 2019-04-03 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(tinyMCEPopup,Wf,$){function init(){var ed=tinyMCEPopup.editor;Wf.init(),ed.updateSearchButtonStates.add(function(o){$.each(o,function(k,v){$("#"+k).prop("disabled",!!v)})}),$("#find").click(function(e){e.preventDefault(),ed.execCommand("mceSearch",!1,{textcase:$("#matchcase").is(":checked"),text:$("#search_string").val(),wholeword:$("#wholewords").is(":checked")})}),$("#next").click(function(e){e.preventDefault(),ed.execCommand("mceSearchNext",!1)}),$("#prev").click(function(e){e.preventDefault(),ed.execCommand("mceSearchPrev",!1)}),$("#replace").click(function(e){e.preventDefault();var value=$("#replace_string").val();ed.execCommand("mceReplace",!1,value)}),$("#replaceAll").click(function(e){e.preventDefault();var value=$("#replace_string").val();ed.execCommand("mceReplaceAll",!1,value)}),ed.windowManager.onClose.add(function(){ed.execCommand("mceSearchDone",!1)}),$("#search_string").val(tinyMCEPopup.getWindowArg("search_string")),$("#search_string").focus()}$(window).ready(init)}(tinyMCEPopup,Wf,jQuery);
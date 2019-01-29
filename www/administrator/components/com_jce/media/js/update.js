/* jce - 2.6.35 | 2018-12-19 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2018 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function($,Wf){Wf.update={updates:{},options:{language:{check:"Check for Updates",install:"Install Updates",installed:"Installed",no_updates:"No Updates Available",high:"High",medium:"Medium",low:"Low",full:"Full Install",patch:"Patch",auth_failed:"Authorisation Failed",install_failed:"Install Failed",update_info:"Update Information",install_info:"Install Information",check_updates:"Checking for Updates...",info:"Show Information",read_more:"More",read_less:"Less"}},init:function(options){var self=this;$.extend(this.options,options),$("button#update-button").click(function(){self.execute(this)}).click()},execute:function(el){$(el).hasClass("check")&&this.check(el),$(el).hasClass("install")&&this.download(el)},translate:function(s,v){return this.options.language[s]||v},check:function(btn){var self=this;$("#install-button").remove();var list=$("div#updates-list");$("div.body",list).html('<div class="item">'+this.translate("check_updates")+"</div>"),$(btn).addClass("loading").prop("disabled",!0);var priority=['<span class="label label-important priority">'+this.translate("high")+"</span>",'<span class="label label-warning priority">'+this.translate("medium")+"</span>",'<span class="label label-info priority">'+this.translate("low")+"</span>"];$.getJSON("index.php?option=com_jce&view=updates&task=update&step=check",{},function(r){if($(btn).removeClass("loading"),$(btn).prop("disabled",!1),$("div.body",list).empty(),r){if("string"==$.type(r)&&(r=$.parseJSON(r)),r.error)return $("div.body",list).html('<div class="item alert alert-error">'+r.error+"</div>"),!1;r.length?($(btn).clone().click(function(){self.execute(this)}).insertAfter(btn).attr({id:"install-button",disabled:"disabled"}).removeClass("check").addClass("install").prop("disabled",!0).html('<i class="icon-arrow-up"></i>&nbsp;'+self.translate("install")),$.each(r,function(n,s){$("div.body",list).append('<div class="item"><div class="span1"><input type="checkbox" data-uid="'+s.id+'" /></div><div class="span5">'+s.title+'</div><div class="span3">'+s.version+'</div><div class="span3">'+priority[s.priority-1]+"</div></div>");var $info=$('<div class="item info">'+s.text+"</div>").appendTo($("div.body",list)),$readmore=$('<span class="readmore">'+self.translate("read_more","More")+"</span>").click(function(){$("div.body .item",list).toggle(),$(this).toggleClass("readmore readless").parent().toggleClass("expand").toggle().prev(".item").toggle(),$(this).html(function(){return $(this).hasClass("readless")?self.translate("read_less","Less"):self.translate("read_more","More")})}).appendTo($info);$.support.leadingWhitespace||$readmore.css("top",0),$("div.body div.item.info",list).on("scroll",function(){$.support.leadingWhitespace?$readmore.css("bottom",-$(this).scrollTop()):$readmore.css("top",$(this).scrollTop())});var sb=$("div.body",list).get(0).clientWidth-$("div.header",list).get(0).clientWidth;sb<0&&$("div.body",list).addClass("scrolling");var el=$("input[data-uid="+s.id+"]");s.auth?(1!=parseInt(s.forced)&&1!=s.priority||($(el).prop("checked",!0).prop("disabled",!0),$("button#install-button").prop("disabled",!1),s.negates&&$("input[data-uid="+s.negates+"]").prop("checked",!1).prop("disabled",!0)),1==parseInt(s.forced)&&$(el).prop("disabled",!0),s.required&&$("input[data-uid="+s.required+"]").prop("checked",!0),$(el).click(function(){if(!$(this).parents(".item").hasClass("alert")){s.negates&&($(this).prop("checked")?$("input[data-uid="+s.negates+"]").prop("checked",!1).prop("disabled",!0):$("input[data-uid="+s.negates+"]").prop("disabled",!1));var len=$(".body .item input:checked",list).length;len?($("button#install-button").attr("disabled","").prop("disabled",!1),len==$('.body .item input[type="checkbox"]',list).length?$('.header div:first-child input[type="checkbox"]',list).prop("checked",!0):$('.header div:first-child input[type="checkbox"]',list).prop("checked",!1)):($("button#install-button").attr("disabled","disabled").prop("disabled",!0),$('.header div:first-child input[type="checkbox"]',list).prop("checked",!1))}})):($(el).prop("disabled",!1).parents(".item").addClass("alert"),$("div.body",list).append('<div class="item alert alert-error">'+s.title+" : "+self.translate("auth_failed")+"</div>"))}),r.length>1&&$('<input type="checkbox" />').appendTo($("div.header div:first",list)).click(function(){$('div.body input[type="checkbox"]',list).click()})):$("div.body",list).append('<div class="item">'+self.translate("no_updates")+"</div>")}else $("div.body",list).append('<div class="item">'+self.translate("no_updates")+"</div>")})},download:function(btn){var t=this,n=1,s=$("#updates-list .body .item input:checked");$(s).prop("disabled",!0),$(btn).prop("disabled",!0),$("button#update-button").prop("disabled",!0),$.extend(t.updates,{joomla:[],jce:[]}),$.each(s,function(){var el=this,uid=$(this).data("uid");$(el).parents(".item").removeClass("alert alert-error").addClass("loading"),$.post("index.php?option=com_jce&view=updates&task=update&step=download",{id:uid},function(r){r&&r.error?$(el).prop("disabled",!1).prop("checked",!1).parents(".item").removeClass("loading").addClass("alert alert-error").next(".item.info").replaceWith('<div class="item alert alert-error">'+r.error+"</div>"):r.file&&($(el).parents(".item").addClass("downloaded"),$.extend(r,{id:uid}),t.updates[r.installer].push(r)),n==s.length&&t.install(btn),n++},"json")})},install:function(btn){function __run(){var updates=t.updates.joomla.length?t.updates.joomla:t.updates.jce;if(updates.length){var file=updates[0],id=file.id,el=$("input[data-uid="+id+"]");$(el).parents(".item").hasClass("downloaded")&&$.post("index.php?option=com_jce&view=updates&task=update&step=install",file,function(r){$(el).parents(".item").removeClass("loading"),r&&r.error?$(el).prop("disabled",!1).prop("checked",!1).parents(".item").removeClass("loading").addClass("alert alert-error").next(".item.info").replaceWith('<div class="item alert alert-error">'+r.error+"</div>"):($(el).prop("checked",!1).parents(".item").addClass("tick"),$("div#update_info_"+id,"").append("<h3>"+t.options.language.install_info+"</h3><div>"+r.text+"</div>"),$(el).parents(".item").find(".priority").removeClass("label-warning label-important label-info").addClass("label-success").html(t.options.language.installed)),updates.splice(0,1),n++,n<s.length?__run():(t.updates={},$("button#update-button").prop("disabled",!1),window.setTimeout(function(){window.parent.document.location.href="index.php?option=com_jce&view=cpanel"},1e3))},"json")}}var t=this,n=0,s=$(".body .item.downloaded input:checked");s.length?__run(n):$("button#update-button").prop("disabled",!1)}}}(jQuery,Wf);
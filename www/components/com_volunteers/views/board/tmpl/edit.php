<?php
/**
 * @package    Joomla! Volunteers
 * @copyright  Copyright (C) 2016 Open Source Matters, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */

// No direct access.
defined('_JEXEC') or die;

JHtml::_('behavior.keepalive');
JHtml::_('behavior.formvalidator');
JHtml::_('formbehavior.chosen', 'select');

JFactory::getDocument()->addScriptDeclaration("
	Joomla.submitbutton = function(task)
	{
		if (task == 'department.cancel' || document.formvalidator.isValid(document.getElementById('department'))) {
			Joomla.submitform(task, document.getElementById('department'));
		}
	}
");
?>

<div class="department-edit">

	<form id="department" action="<?php echo JRoute::_('index.php?option=com_volunteers&task=department.save&id=' . (int) $this->item->id); ?>" method="post" class="form-validate form-horizontal" enctype="multipart/form-data">
		<div class="row-fluid">

			<div class="filter-bar">
				<div class="btn-toolbar pull-right">
					<div id="toolbar-cancel" class="btn-group">
						<button class="btn btn-danger" onclick="Joomla.submitbutton('department.cancel')">
							<span class="icon-cancel"></span> <?php echo JText::_('JCANCEL') ?>
						</button>
					</div>
					<div id="toolbar-apply" class="btn-group">
						<button class="btn btn-success" type="submit">
							<span class="icon-pencil"></span> <?php echo JText::_('JSAVE') ?>
						</button>
					</div>
				</div>
			</div>
			<div class="page-header">
				<h1><?php echo JText::_('COM_VOLUNTEERS_TITLE_DEPARTMENTS_EDIT') ?></h1>
			</div>

		</div>

		<?php echo $this->form->renderField('title'); ?>
		<?php echo $this->form->renderField('alias'); ?>

		<hr>

		<?php echo $this->form->renderField('email'); ?>
		<?php echo $this->form->renderField('website'); ?>

		<hr>

		<?php echo $this->form->renderField('description'); ?>

		<hr>

		<div class="row-fluid">
			<div class="btn-toolbar pull-right">
				<div id="toolbar-cancel" class="btn-group">
					<a class="btn btn-danger" href="<?php echo JRoute::_('index.php?option=com_volunteers&view=department&id=' . $this->item->id) ?>">
						<span class="icon-cancel"></span> <?php echo JText::_('JCANCEL') ?>
					</a>
				</div>
				<div id="toolbar-apply" class="btn-group">
					<button class="btn btn-success" type="submit">
						<span class="icon-pencil"></span> <?php echo JText::_('JSAVE') ?>
					</button>
				</div>
			</div>
		</div>

		<input type="hidden" name="option" value="com_volunteers"/>
		<input type="hidden" name="task" value="department.save"/>
		<?php echo JHtml::_('form.token'); ?>
	</form>
</div>

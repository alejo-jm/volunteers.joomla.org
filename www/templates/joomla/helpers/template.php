<?php
/**
 * Joomla.org site template
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

/**
 * Helper class for the Joomla template
 */
class JoomlaTemplateHelper
{
	/**
	 * Retrieve the Google Tag Manager property ID for the current site
	 *
	 * Note that this helper method is only 'good' for live sites, for development environments no ID is returned
	 *
	 * @param   string  $siteUrl  The site URL without the scheme
	 *
	 * @return  string|boolean  The property ID or boolean false if one is not assigned
	 */
	public static function getGtmId($siteUrl)
	{
		switch ($siteUrl)
		{
			case 'api.joomla.org':
			{
				$id = 'GTM-NDWJB8';

				break;
			}

			case 'certification.joomla.org':
			{
				$id = 'GTM-PFP9MJ';

				break;
			}

			case 'community.joomla.org':
			{
				$id = 'GTM-WQNG7Z';

				break;
			}

			case 'conference.joomla.org':
			{
				$id = 'GTM-PZWNZR';

				break;
			}

			case 'developer.joomla.org':
			{
				$id = 'GTM-WJ36D4';

				break;
			}

			case 'docs.joomla.org':
			{
				$id = 'GTM-K6SPGS';

				break;
			}

			case 'downloads.joomla.org':
			{
				$id = 'GTM-KR9CX8';

				break;
			}

			case 'events.joomla.org':
			{
				$id = 'GTM-KNQ6RP';

				break;
			}

			case 'exam.joomla.org':
			{
				$id = 'GTM-TRG37W';

				break;
			}

			case 'extensions.joomla.org':
			{
				$id = 'GTM-MH6RGF';

				break;
			}

			case 'forum.joomla.org':
			{
				$id = 'GTM-TWSN2R';

				break;
			}

			case 'framework.joomla.org':
			{
				$id = 'GTM-NX46ZP';

				break;
			}

			case 'issues.joomla.org':
			{
				$id = 'GTM-M7HXQ7';

				break;
			}

			case 'magazine.joomla.org':
			{
				$id = 'GTM-WG7372';

				break;
			}

			case 'opensourcematters.org':
			{
				$id = 'GTM-5GST4C';

				break;
			}

			case 'resources.joomla.org':
			{
				$id = 'GTM-K8CR7K';

				break;
			}

			case 'shop.joomla.org':
			{
				$id = 'GTM-NZ9B7F';

				break;
			}

			case 'showcase.joomla.org':
			{
				$id = false;

				break;
			}

			case 'tm.joomla.org':
			{
				$id = 'GTM-KZ7SM9';

				break;
			}

			case 'vel.joomla.org':
			{
				$id = 'GTM-NKZPKQ';

				break;
			}

			case 'volunteers.joomla.org':
			{
				$id = 'GTM-P2Z55T';

				break;
			}

			case 'www.joomla.org':
			{
				$id = 'GTM-WWC8WL';

				break;
			}

			default:
				$id = false;

				break;
		}

		return $id;
	}

	/**
	 * Retrieve the "report an issue" link for the current site
	 *
	 * Note that this helper method is only 'good' for the live site, for development environments it will use a default link
	 *
	 * @param   string  $siteUrl  The site URL without the scheme
	 *
	 * @return  string  The issue link
	 */
	public static function getIssueLink($siteUrl)
	{
		$hasCustom = false;

		switch ($siteUrl)
		{
			case 'api.joomla.org':
			{
				$tag = 'japi';

				break;
			}

			case 'certification.joomla.org':
			{
				$tag = 'jcertif';

				break;
			}

			case 'community.joomla.org':
			{
				$tag = 'jcomm';

				break;
			}

			case 'conference.joomla.org':
			{
				$tag = 'jconf';

				break;
			}

			case 'developer.joomla.org':
			{
				$tag = 'jdev';

				break;
			}

			case 'docs.joomla.org':
			{
				$tag = 'jdocs';

				break;
			}

			case 'downloads.joomla.org':
			{
				$tag = 'jdown';

				break;
			}

			case 'events.joomla.org':
			{
				$tag = 'jevnt';

				break;
			}

			case 'exam.joomla.org':
			{
				$tag = 'jexam';

				break;
			}

			case 'extensions.joomla.org':
			{
				$hasCustom = true;
				$tag       = 'jed';
				$url       = 'https://joomlaextensionsdirectory.atlassian.net/secure/Dashboard.jspa';

				break;
			}

			case 'forum.joomla.org':
			{
				$tag = 'jforum';

				break;
			}

			case 'framework.joomla.org':
			{
				$hasCustom = true;
				$tag       = 'jfw';
				$url       = 'https://github.com/joomla/framework.joomla.org/issues/new?title=[FW%20Site]&body=Please%20state%20the%20nature%20of%20your%20development%20emergency';

				break;
			}

			case 'issues.joomla.org':
			{
				$hasCustom = true;
				$tag       = 'jissues';
				$url       = 'https://issues.joomla.org/tracker/jtracker';

				break;
			}

			case 'magazine.joomla.org':
			{
				$tag = 'jmag';

				break;
			}

			case 'opensourcematters.org':
			{
				$tag = 'josm';

				break;
			}

			case 'resources.joomla.org':
			{
				$tag = 'jrd';

				break;
			}

			case 'shop.joomla.org':
			{
				$tag = 'jshop';

				break;
			}

			case 'showcase.joomla.org':
			{
				$tag = 'jshow';

				break;
			}

			case 'tm.joomla.org':
			{
				$tag = 'jtm';

				break;
			}

			case 'vel.joomla.org':
			{
				$tag = 'jvel';

				break;
			}

			case 'volunteers.joomla.org':
			{
				$tag = 'jvols';

				break;
			}

			case 'www.joomla.org':
			{
				$tag = 'joomla.org';

				break;
			}

			default:
				$tag = '';

				break;
		}

		// Build the URL if we aren't using a custom source
		if (!$hasCustom)
		{
			$url = 'https://github.com/joomla/joomla-websites/issues/new?';

			// Do we have a tag?
			if (!empty($tag))
			{
				$url .= "title=[$tag]%20&";
			}

			$url .= 'body=Please%20describe%20the%20problem%20or%20your%20issue';
		}

		return $url;
	}

	/**
	 * Get the route for the login page
	 *
	 * @return  string
	 */
	public static function getLoginRoute()
	{
		// Load the com_users route helper
		JLoader::register('UsersHelperRoute', JPATH_SITE . '/components/com_users/helpers/route.php');

		// Look for a menu item for this route
		$itemid = UsersHelperRoute::getLoginRoute();
		$itemid = $itemid !== null ? '&Itemid=' . $itemid : '';

		// Return the base route plus menu item ID if available
		return 'index.php?option=com_users&view=login' . $itemid;
	}
}
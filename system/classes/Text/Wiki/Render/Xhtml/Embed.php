<?php

namespace Geeklog\Text\Wiki;

/**
 * Embed rule end renderer for Xhtml
 * PHP versions 4 and 5
 *
 * @category   Text
 * @package    Text_Wiki
 * @author     Paul M. Jones <pmjones@php.net>
 * @license    http://www.gnu.org/copyleft/lesser.html  LGPL License 2.1
 * @version    CVS: $Id: Embed.php 191862 2005-07-30 08:03:29Z toggg $
 * @link       http://pear.php.net/package/Text_Wiki
 */

/**
 * This class replaces the embedded php output in XHTML.
 *
 * @category   Text
 * @package    Text_Wiki
 * @author     Paul M. Jones <pmjones@php.net>
 * @license    http://www.gnu.org/copyleft/lesser.html  LGPL License 2.1
 * @version    Release: @package_version@
 * @link       http://pear.php.net/package/Text_Wiki
 */
class Text_Wiki_Render_Xhtml_Embed extends Text_Wiki_Render
{
    /**
     * Renders a token into text matching the requested format.
     *
     * @param array $options The "options" portion of the token (second
     *                       element).
     * @return string The text rendered from the token options.
     */
    public function token($options)
    {
        return $options['text'];
    }
}

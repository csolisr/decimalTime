decimalTime
===========

decimalTime is a straightforward implementation of how to write and
display a date and time in decimal notation, either worldwide or
local based on legacy timezones. Years are counted from the Unix
Epoch (Jan. 1st, 1970 in legacy time), time is counted by number of
days elapsed during the year, plus the fragment of day already
elapsed up to five decimal digits (deciday, centiday, milliday,
decimilliday, centimilliday). As of yet, decimal time has been only
implemented for terrestrial dates, hence the T suffix after the year.
Worldwide time is indicated by an M suffix, while local timezones use
a L prefix followed by two digits that score the amount of offset
from legacy UTC.

Sample worldwide date: 43T364.84167M

Sample local date for UTC-6: 43T364.59167L-06

License
===========

Copyright (C) 2013 Carlos Solís

The JavaScript code in this page is free software: you can
redistribute it and/or modify it under the terms of the GNU
Affero General Public License (GNU AGPL) as published by the Free
Software Foundation, either version 3 of the License, or (at your
option) any later version.

The code is distributed WITHOUT ANY WARRANTY; without even the
implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE.  See the GNU AGPL for more details.

As additional permission under GNU AGPL version 3 section 7, you
may distribute non-source (e.g., minimized or compacted) forms of
that code without the copy of the GNU AGPL normally required by
section 4, provided you include this license notice and a URL
through which recipients can access the Corresponding Source.

Parameters
===========

**date**: A JavaScript date object of choice. Set it before sending
it. Defaults to the current date.

**isLocal**: A boolean that determines if the time displayed must be
adapted to the current legacy timezone. Defaults to false.

**precision**: A number that determines how many decimal places must
be shown. Defaults to 5.

Warning
===========

This script is written for legibility, NOT for performance. Consider
minimizing it before deployment.

Bookkeeping - A simple couchapp to take care of your expenses

* Introduction
  bookkeeping is a small couchapp that I wrote to visualise my
  expenses for my small household. It allows you to enter expenses and
  put them into freely defineable categories. A daily and a monthly
  tab summarise what you have spend so far.

  Thanks to tuftegraph you will see nice stacked graphs showing how
  much money you spent each month to which category.

* Prerequesites
  As bookkeeping is a couchapp you will need the [[http://github.com/couchapp/couchapp][couchapp]] program
  itself and also couchdb in a recent version. (I started with 0.10.x
  so anything like this will work)

* Used software libraries
  I am standing on shoulders of giants here. This little app includes:
  - [[jqueryui.com][jqueryui]]
  - [[http://github.com/xaviershay/tufte-graph][tufte-graph]] by Xavier Shay

* Installation
  This is pretty straight forward. As it is a couchapp like many others a simple 
  chouchapp push . http://youruser:yourpass@localhost:5984/dbname
  will do.

* Configuration
  Bookkeeping has now replication support! Add a document with the id
  'replicas' which has the following structure:

  {
   "_id": "replicas",
   "_rev": "2-4e7f92128bd6b5e89431bd553c531b3c",
   "hosts": [
       "http://somehosttosyncwith:5894/bookkeeping",
       "http://otherhost:5984/bookkeeping" ],
   "type": "config"
  }

  This causes your local couchdb to establish bidirektional
  replication requests with each of the hosts.  If you don't want this
  feature leave the host list empty.
* Current flaws / Todo list
  - No user authentication is currently enforced so everyone can edit anything!
  - Just add categories as you go, the app will add them.
  - No meta editing implemented such as renaming of categories. Use futon for now.

* License

Copyright (c) 2010, Christian Kellermann <ckeen@pestilenz.org>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of the <ORGANIZATION> nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

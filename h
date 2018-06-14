[33mcommit 1b315ae027e1c1a40510414ffc68990455a761c1[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sat Jun 9 21:49:05 2018 -0400

    Another Major API change, Tested
    
    Invertory:
    getItems() -> getItemsInArray()
    getItemsInArray()[i].id -> getItemsInArray()[i].itemid
    new
    equipId(id),
    unequipId(id),
    switchEquipId(id),
    getItemById(id),
    getItemsByItemid(itemid),
    static extendItem(item),
    
    ItemDetailsScroll:
    showItem(itemid) -> showItem(id)
    createEquipButton(itemid) -> createEquipButton(id)
    
    ItemIcon:
    setProperties(a, b, c) -> setProperties(id, itemDetailScroll)
    
    tested

[33mcommit 162ed309e77d47e75b0539d7e053e8080e31bff4[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sat Jun 9 06:15:14 2018 -0400

    ATTN: Major API change in Invertory
    
    Invertory:
    - getItems() -> getItemsInArray()
    - getItemsInArray()[i].id -> getItemsInArray()[i].itemid
    - new equipId(id), unequipId(id)
    
    Note: I did not test any of the code.

[33mcommit f65eca851f7e74d3324b63227855f5c1245d1a5d[m
Merge: 0ff5268 f6ae59b
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sat Jun 9 02:50:11 2018 -0400

    Merge pull request #10 from geniuszhaoyi/hesong
    
    Hesong

[33mcommit f6ae59b9f61fdb918a58174decf47a7607b95faf[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Sat Jun 9 01:50:26 2018 -0400

    hello

[33mcommit f9cb4af03e4c9084cef2ec0888b67edc70a71786[m
Merge: 45d0101 0ff5268
Author: kanbd <kanbdsh@gmail.com>
Date:   Fri Jun 8 22:02:42 2018 -0400

    Merge pull request #9 from geniuszhaoyi/zhaoyi
    
    asd

[33mcommit 45d0101d85b08deeb83657adc5cdfd3bb2c3ce14[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Fri Jun 8 21:57:27 2018 -0400

    add new paneal

[33mcommit 0ff5268846b2a5367b9363e379d2defaa4faa76b[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Fri Jun 8 05:40:11 2018 -0400

    asd

[33mcommit a2a1bf2e4de871d345955216ccd32d2a015afdfd[m
Merge: ce96410 56e2a9b
Author: kanbd <kanbdsh@gmail.com>
Date:   Fri Jun 8 02:25:24 2018 -0400

    Merge branch 'hesong' of github.com:geniuszhaoyi/projectG into hesong
    d

[33mcommit ce96410a91620bd13fefc7d716f4fa258133ba7a[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Fri Jun 8 02:25:16 2018 -0400

    a

[33mcommit 56e2a9b1d9b0bf97bdcf8dc1a97bdf6dced37d40[m
Merge: 1ea005f 0866cda
Author: kanbd <kanbdsh@gmail.com>
Date:   Fri Jun 8 02:24:21 2018 -0400

    Merge pull request #8 from geniuszhaoyi/zhaoyi
    
    Zhaoyi

[33mcommit 0866cda427095d1469171594b1bb7fe37418c742[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Fri Jun 8 02:06:15 2018 -0400

    itemspage

[33mcommit a3cd6246a7b4be032374b8887425554c034bebf6[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Thu Jun 7 16:31:42 2018 -0400

    add scripts

[33mcommit 267aa52593d6dd7bd2e9850591e8a1bb7d616856[m
Merge: 7d7803e 1ea005f
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 23:41:13 2018 -0400

    Merge pull request #7 from geniuszhaoyi/hesong
    
    Hesong

[33mcommit 1ea005fd2b851f9b4a0dc1d9e864b112e646dc7b[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Wed Jun 6 23:38:50 2018 -0400

    hello

[33mcommit 7d7803ebc4f3c7baa2671d99c10c658f8163111f[m
Merge: a362e58 90f2fdf
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 23:19:48 2018 -0400

    Merge pull request #6 from geniuszhaoyi/master
    
    hehe

[33mcommit ecb8e8869db791c9d351689473ba390b333698dc[m
Merge: ebb9263 90f2fdf
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 23:19:05 2018 -0400

    Merge pull request #5 from geniuszhaoyi/master
    
    hehe

[33mcommit 90f2fdf87f4e2ad49c99de1a2a102be7a85e2775[m
Merge: 32c7499 ebb9263
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 23:17:07 2018 -0400

    Merge pull request #4 from geniuszhaoyi/hesong
    
    new updata for switch

[33mcommit 32c7499c0d59b10ce1fb913b1b6dafa17d5d6503[m
Merge: 519c3f2 a362e58
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 23:16:37 2018 -0400

    Merge pull request #3 from geniuszhaoyi/zhaoyi
    
    Zhaoyi

[33mcommit ebb92631cd5ef5d6bb2afab952b82996f656fdfd[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Wed Jun 6 23:15:38 2018 -0400

    new updata for switch

[33mcommit a362e5890b95962df4ffb3dcdf4417e5b6b52013[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 23:05:55 2018 -0400

    a

[33mcommit 59b23f2d83aa50e6cacb809de94eb497e74f14f0[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Wed Jun 6 22:59:04 2018 -0400

    change newitem to j

[33mcommit d5e2c2addd5d5f7f821cf35f3aabeb4b3f157fa6[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Wed Jun 6 22:31:59 2018 -0400

    edit

[33mcommit 134fad3f344fee8cc9aed295676c1960f98a6f7b[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 22:16:24 2018 -0400

    m

[33mcommit a30af46cbee56e7b5b89e36556f571aaeb5673eb[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Wed Jun 6 22:05:34 2018 -0400

    merage my sidebar

[33mcommit 59985491e24f06870e188c55089aa9e609facca4[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 21:12:32 2018 -0400

    asd

[33mcommit 519c3f2a01464a9be891494b4cbaeea18a523384[m
Merge: ff7cafc 61444f5
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 21:06:22 2018 -0400

    Merge pull request #2 from geniuszhaoyi/zhaoyi
    
    Zhaoyi

[33mcommit 61444f56ed09b86f05f08e230724e9bcda36bda8[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Wed Jun 6 21:05:26 2018 -0400

    prefab

[33mcommit 8e3f2b525440ea6dfae9728ffab0a3b91880fcca[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Tue Jun 5 04:45:58 2018 -0400

    a

[33mcommit ff7cafc21bdf0c03c74dafcefb7b171c6a5ce03c[m
Merge: b00a830 a1b533d
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Tue Jun 5 04:44:14 2018 -0400

    Merge pull request #1 from geniuszhaoyi/zhaoyi
    
    Zhaoyi

[33mcommit a1b533d6577dce7cc573c270e55ef1f10ab4fb58[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Mon Jun 4 06:46:32 2018 -0400

    asd

[33mcommit 2cb641924d7feeda926a437bd2295aa98906008a[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sun Jun 3 03:23:58 2018 -0400

    script

[33mcommit b00a8303fc932e00c25600e0d3fd641c1f73a6ae[m
Merge: 8f1b86b 0a13fa6
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sun Jun 3 00:33:15 2018 -0400

    Merge branch 'master' of github.com:geniuszhaoyi/projectG

[33mcommit 8f1b86bd302256e597a3e1dadceb2853f9999c1a[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sun Jun 3 00:31:49 2018 -0400

    a

[33mcommit 0a13fa6ff29defa7b0c916ddddbe3ab5f13e6e7f[m
Author: kanbd <kanbdsh@gmail.com>
Date:   Sat Jun 2 23:23:02 2018 -0400

    edit readme.md

[33mcommit 7159a76f1981095139169660f729b093e5b35673[m
Author: geniuszhaoyi <genius.zhaoyi@gmail.com>
Date:   Sat Jun 2 23:09:25 2018 -0400

    start

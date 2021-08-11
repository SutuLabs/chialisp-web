"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[44],{3905:function(e,n,t){t.d(n,{Zo:function(){return h},kt:function(){return _}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=u(t),_=i,d=p["".concat(l,".").concat(_)]||p[_]||c[_]||a;return t?o.createElement(d,s(s({ref:n},h),{},{components:t})):o.createElement(d,s({ref:n},h))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4931:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return p}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),s=["components"],r={id:"singletons",title:"Singletons"},l=void 0,u={unversionedId:"puzzles/singletons",id:"puzzles/singletons",isDocsHomePage:!1,title:"Singletons",description:"One of the most important puzzles in the Chia ecosystem is the singleton.",source:"@site/docs/puzzles/singletons.md",sourceDirName:"puzzles",slug:"/puzzles/singletons",permalink:"/docs/puzzles/singletons",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/puzzles/singletons.md",version:"current",frontMatter:{id:"singletons",title:"Singletons"},sidebar:"someSidebar",previous:{title:"Serialization",permalink:"/docs/ref/serialization"},next:{title:"Pooling",permalink:"/docs/puzzles/pooling"}},h=[{value:"Design choices",id:"design-choices",children:[]},{value:"The Launcher",id:"the-launcher",children:[]},{value:"The Singleton Top Layer",id:"the-singleton-top-layer",children:[]},{value:"Pay to Singleton",id:"pay-to-singleton",children:[]}],c={toc:h};function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the most important puzzles in the Chia ecosystem is the ",(0,a.kt)("strong",{parentName:"p"},"singleton"),".\nThis is a puzzle that assures anyone who looks at can see that it has a unique ID that no other coin has.\nParties can decide to accept messages or commitments from that unique ID with the assurance that the party who controls the singleton is not double dipping or impersonating someone else."),(0,a.kt)("p",null,"This puzzle is an ",(0,a.kt)("a",{parentName:"p",href:"/docs/common_functions"},"outer puzzle")," and is used to wrap pooling puzzles, NFTs, and decentralized identities.\nAny inner puzzle can be wrapped with this puzzle if it has necessity for uniqueness."),(0,a.kt)("h2",{id:"design-choices"},"Design choices"),(0,a.kt)("p",null,"A few design choices were made in the creation of this puzzle so let's go over them now:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Singletons are always odd."),"  In order to assure that a singleton does not duplicate itself, it needs some way to verify that its children do not consist of more than one new singleton.\nIt does this by verifying that only one of its children is odd.\nIt is either a new singleton, or it is the ",(0,a.kt)("strong",{parentName:"li"},"melt value")," and will be ignored (more on that later).\nOdd was chosen over even because you may want to have singletons create other, non-singleton coins at times (like 0 amount messages for the DID) and having the singleton be odd just makes this easier.\nCoins can be multiples of 10 so you can send a full XCH rather than an XCH and a mojo.\nNo matter how many even amounts you subtract from an odd amount, the end result will always be odd."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Singletons always wrap their odd child.")," This abstracts some of the singleton functionality away from the inner puzzles.\nIf an inner puzzle creates an odd coin, it doesn't have to worry about making it a singleton, the ",(0,a.kt)("a",{parentName:"li",href:"https://chialisp.com/docs/common_functions/#outer-and-inner-puzzles"},"outer puzzle will take care of that"),".\nIt also prevents an inner puzzle from accidentally melting the singleton by forgetting to wrap its odd output."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A specific magic melt value determines whether the singleton wraps its child.")," If you would like to destroy a singleton and use its amount to create a new non-singleton coin, you need to output a ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE_COIN")," condition that uses the amount ",(0,a.kt)("inlineCode",{parentName:"li"},"-113"),".\nWhen the singleton outer puzzle sees that condition, it filters it out.\nThis amount was arbitrarily chosen and is negative because a coin with negative amount cannot exist. Therefore, it is an unlikely accidental output of an inner puzzle.\nThis is chosen to prevent an inner puzzle from accidentally melting a singleton by forgetting to create an odd output.\nIt must deliberately specify to melt the singleton.\nKeep in mind that the melt value ",(0,a.kt)("em",{parentName:"li"},"does")," count as the odd output, but is ignored, creating the need to burn one mojo of coin value in order to melt (all of the outputs must be even).\nUsually there will be a transaction fee anyways so it likely just becomes part of that.\nYou should also be wary of the amount of control you give to people who you partially lend your singleton to.\nIf they can freely create conditions, it may be possible for them to melt your singleton against your wishes.")),(0,a.kt)("h2",{id:"the-launcher"},"The Launcher"),(0,a.kt)("p",null,"We need to ensure that only one singleton is created with the same ID.\nThis is surprisingly difficult.\nThe crux of the issue is that we have no control over the coin that creates the singleton.\nWe could rely on a curried in id, but it's easy enough for someone to create the exact same singleton by currying in the same id.\nInstead, we could use the parent coin ID which would be unique to all of its descendants, however, you could still create multiple singletons in that first spend."),(0,a.kt)("p",null,"This is technically detectable by crawling up the chain and checking the first non-singleton coin to see if it had multiple singleton children, but this is inefficient and we would like all of our logic to be contained to the puzzles."),(0,a.kt)("p",null,"Instead, what we can use is a ",(0,a.kt)("strong",{parentName:"p"},"launcher")," which is a specific puzzle that does exactly one thing: create a single singleton.\nWe then need to curry this launcher puzzle hash into our singleton and have the first singleton assert that it, in fact, came from a parent whose puzzle hash was the launcher puzzle hash.\nThen, when people look at our singleton, they can see that the launcher puzzle hash is the hash of what they know to be a puzzle that creates only one singleton.\nThey don't need to go back to the original parent and verify because the singleton puzzle takes care of that right from the start!"),(0,a.kt)("p",null,"So what does the launcher look like?  Here's the source:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (singleton_full_puzzle_hash amount key_value_list)\n\n  (include condition_codes.clvm)\n\n  (defun sha256tree (TREE)\n      (if (l TREE)\n          (sha256 2 (sha256tree (f TREE)) (sha256tree (r TREE)))\n          (sha256 1 TREE)\n      )\n  )\n\n  ; main\n  (list (list CREATE_COIN singleton_full_puzzle_hash amount)\n        (list CREATE_COIN_ANNOUNCEMENT (sha256tree (list singleton_full_puzzle_hash amount key_value_list))))\n)\n")),(0,a.kt)("p",null,"Essentially two lines, so not too bad right?  One of the first things you may notice is that we don't curry anything in.\nWe actually cannot curry anything in because we want this puzzle hash to be constant among all singletons.\nThat way, even if someone isn't familiar with us, they know that if we came from this specific launcher puzzle hash, we can be trusted to be a unique singleton."),(0,a.kt)("p",null,"For the most part, you simply put in ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," parameters and the puzzle creates the singleton for you.\nThe tricky part is the announcement creation.\nSince these parameters are not curried in, we somehow need them to be immune from the manipulations of malicious full nodes.\nWe cannot curry in a pubkey to sign them, or else our puzzle hash is no longer static. Our solution to this conundrum is to create an announcement from this puzzle that its parent asserts in the same block.\nUsually, the parent is going to be a standard coin. In the standard coin, we sign the puzzle that makes the conditions.\nIf we create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSERT_COIN_ANNOUNCEMENT")," condition, we implicitly sign that too. That means we can implicitly sign all of the launcher solution values through asserting this announcement.\nIf any of those values are changed, the coin that creates the launcher will fail and thus the launcher will never be created!"),(0,a.kt)("p",null,"The last thing to note is the seemingly useless ",(0,a.kt)("inlineCode",{parentName:"p"},"key_value_list")," that is passed in as an argument and announced.\nThe purpose for this is to communicate information to blockchain observers.\nSometimes you want to be able to know information about a puzzle before it is revealed.\nThe only way we can get this information on chain is from the parent's puzzle reveal so sometimes it is useful to have useless parameters be part of the solution in order to make it easier to follow the puzzle's on chain state.\nRemember that you pay cost for every byte though so keep it concise."),(0,a.kt)("h2",{id:"the-singleton-top-layer"},"The Singleton Top Layer"),(0,a.kt)("p",null,"Here's the full source, we'll break it down after:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},'(mod (\n       SINGLETON_STRUCT\n       INNER_PUZZLE\n       lineage_proof\n       my_amount\n       inner_solution\n     )\n\n     ;; SINGLETON_STRUCT = (MOD_HASH . (LAUNCHER_ID . LAUNCHER_PUZZLE_HASH))\n\n     ; SINGLETON_STRUCT, INNER_PUZZLE are curried in by the wallet\n\n  ; This puzzle is a wrapper around an inner smart puzzle which guarantees uniqueness.\n  ; It takes its singleton identity from a coin with a launcher puzzle which guarantees that it is unique.\n\n  (include condition_codes.clib)\n  (include curry-and-treehash.clib)\n  (include singleton_truths.clib)\n\n  ; takes a lisp tree and returns the hash of it\n  (defun sha256tree (TREE)\n      (if (l TREE)\n          (sha256 2 (sha256tree (f TREE)) (sha256tree (r TREE)))\n          (sha256 1 TREE)\n      )\n  )\n\n  ; "assert" is a macro that wraps repeated instances of "if"\n  ; usage: (assert A0 A1 ... An R)\n  ; all of A0, A1, ... An must evaluate to non-null, or an exception is raised\n  ; return the value of R (if we get that far)\n\n  (defmacro assert items\n    (if (r items)\n        (list if (f items) (c assert (r items)) (q . (x)))\n        (f items)\n    )\n  )\n\n  (defun-inline mod_hash_for_singleton_struct (SINGLETON_STRUCT) (f SINGLETON_STRUCT))\n  (defun-inline launcher_id_for_singleton_struct (SINGLETON_STRUCT) (f (r SINGLETON_STRUCT)))\n  (defun-inline launcher_puzzle_hash_for_singleton_struct (SINGLETON_STRUCT) (r (r SINGLETON_STRUCT)))\n\n  ;; return the full puzzlehash for a singleton with the innerpuzzle curried in\n  ; puzzle-hash-of-curried-function is imported from curry-and-treehash.clinc\n  (defun-inline calculate_full_puzzle_hash (SINGLETON_STRUCT inner_puzzle_hash)\n     (puzzle-hash-of-curried-function (mod_hash_for_singleton_struct SINGLETON_STRUCT)\n                                      inner_puzzle_hash\n                                      (sha256tree SINGLETON_STRUCT)\n     )\n  )\n\n  ; assembles information from the solution to create our own full ID including asserting our parent is a singleton\n  (defun create_my_ID (SINGLETON_STRUCT full_puzzle_hash parent_parent parent_inner_puzzle_hash parent_amount my_amount)\n    (sha256 (sha256 parent_parent (calculate_full_puzzle_hash SINGLETON_STRUCT parent_inner_puzzle_hash) parent_amount)\n            full_puzzle_hash\n            my_amount)\n  )\n\n  ;; take a boolean and a non-empty list of conditions\n  ;; strip off the first condition if a boolean is set\n  ;; this is used to remove `(CREATE_COIN xxx -113)`\n  ;; pretty sneaky, eh?\n  (defun strip_first_condition_if (boolean condition_list)\n    (if boolean\n      (r condition_list)\n      condition_list\n    )\n  )\n\n  (defun-inline morph_condition (condition SINGLETON_STRUCT)\n    (list (f condition) (calculate_full_puzzle_hash SINGLETON_STRUCT (f (r condition))) (f (r (r condition))))\n  )\n\n  ;; return the value of the coin created if this is a `CREATE_COIN` condition, or 0 otherwise\n  (defun-inline created_coin_value_or_0 (condition)\n    (if (= (f condition) CREATE_COIN)\n        (f (r (r condition)))\n        0\n    )\n  )\n\n  ;; Returns a (bool . bool)\n  (defun odd_cons_m113 (output_amount)\n    (c\n      (= (logand output_amount 1) 1) ;; is it odd?\n      (= output_amount -113) ;; is it the escape value?\n    )\n  )\n\n  ; Assert exactly one output with odd value exists - ignore it if value is -113\n\n  ;; this function iterates over the output conditions from the inner puzzle & solution\n  ;; and both checks that exactly one unique singleton child is created (with odd valued output),\n  ;; and wraps the inner puzzle with this same singleton wrapper puzzle\n  ;;\n  ;; The special case where the output value is -113 means a child singleton is intentionally\n  ;; *NOT* being created, thus forever ending this singleton\'s existence\n\n  (defun check_and_morph_conditions_for_singleton (SINGLETON_STRUCT conditions has_odd_output_been_found)\n      (if conditions\n        (morph_next_condition SINGLETON_STRUCT conditions has_odd_output_been_found (odd_cons_m113 (created_coin_value_or_0 (f conditions))))\n        (if has_odd_output_been_found\n            0\n            (x)  ;; no odd output found\n        )\n      )\n   )\n\n   ;; a continuation of `check_and_morph_conditions_for_singleton` with booleans `is_output_odd` and `is_output_m113`\n   ;; precalculated\n   (defun morph_next_condition (SINGLETON_STRUCT conditions has_odd_output_been_found (is_output_odd . is_output_m113))\n       (assert\n          (not (all is_output_odd has_odd_output_been_found))\n          (strip_first_condition_if\n             is_output_m113\n             (c (if is_output_odd\n                    (morph_condition (f conditions) SINGLETON_STRUCT)\n                    (f conditions)\n                )\n                (check_and_morph_conditions_for_singleton SINGLETON_STRUCT (r conditions) (any is_output_odd has_odd_output_been_found))\n             )\n          )\n      )\n   )\n\n  ; this final stager asserts our ID\n  ; it also runs the innerpuz with the innersolution with the "truths" added\n  ; it then passes that output conditions from the innerpuz to the morph conditions function\n  (defun stager_three (SINGLETON_STRUCT lineage_proof my_id full_puzhash innerpuzhash my_amount INNER_PUZZLE inner_solution)\n    (c (list ASSERT_MY_COIN_ID my_id) (check_and_morph_conditions_for_singleton SINGLETON_STRUCT (a INNER_PUZZLE (c (truth_data_to_truth_struct my_id full_puzhash innerpuzhash my_amount lineage_proof SINGLETON_STRUCT) inner_solution)) 0))\n  )\n\n  ; this checks whether we are an eve spend or not and calculates our full coin ID appropriately and passes it on to the final stager\n  ; if we are the eve spend it also adds the additional checks that our parent\'s puzzle is the standard launcher format and that out parent ID is the same as our singleton ID\n\n  (defun stager_two (SINGLETON_STRUCT lineage_proof full_puzhash innerpuzhash my_amount INNER_PUZZLE inner_solution)\n    (stager_three\n      SINGLETON_STRUCT\n      lineage_proof\n      (if (is_not_eve_proof lineage_proof)\n          (create_my_ID\n            SINGLETON_STRUCT\n            full_puzhash\n            (parent_info_for_lineage_proof lineage_proof)\n            (puzzle_hash_for_lineage_proof lineage_proof)\n            (amount_for_lineage_proof lineage_proof)\n            my_amount\n          )\n          (if (=\n                (launcher_id_for_singleton_struct SINGLETON_STRUCT)\n                (sha256 (parent_info_for_eve_proof lineage_proof) (launcher_puzzle_hash_for_singleton_struct SINGLETON_STRUCT) (amount_for_eve_proof lineage_proof))\n              )\n              (sha256 (launcher_id_for_singleton_struct SINGLETON_STRUCT) full_puzhash my_amount)\n              (x)\n          )\n      )\n      full_puzhash\n      innerpuzhash\n      my_amount\n      INNER_PUZZLE\n      inner_solution\n    )\n  )\n\n  ; this calculates our current full puzzle hash and passes it to stager two\n  (defun stager_one (SINGLETON_STRUCT lineage_proof my_innerpuzhash my_amount INNER_PUZZLE inner_solution)\n    (stager_two SINGLETON_STRUCT lineage_proof (calculate_full_puzzle_hash SINGLETON_STRUCT my_innerpuzhash) my_innerpuzhash my_amount INNER_PUZZLE inner_solution)\n  )\n\n\n  ; main\n\n  ; if our value is not an odd amount then we are invalid\n  ; this calculates my_innerpuzhash and passes all values to stager_one\n  (if (logand my_amount 1)\n    (stager_one SINGLETON_STRUCT lineage_proof (sha256tree INNER_PUZZLE) my_amount INNER_PUZZLE inner_solution)\n    (x)\n  )\n)\n')),(0,a.kt)("p",null,"Quite a bit isn't it?  Let's start with the arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(\n  SINGLETON_STRUCT\n  INNER_PUZZLE\n  lineage_proof\n  my_amount\n  inner_solution\n)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SINGLETON_STRUCT")," is a collection of three things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The tree hash of this module"),(0,a.kt)("li",{parentName:"ul"},"The launcher coin ID (this acts as the unique ID for the singleton)"),(0,a.kt)("li",{parentName:"ul"},"The launcher puzzle hash")),(0,a.kt)("p",null,"The reason they are grouped into a single structure is because they are passed through almost every function. It increases readability and optimization if they are passed through as a single variable until it is time to deconstruct them."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INNER_PUZZLE")," is the inner puzzle to this wrapper puzzle."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lineage_proof")," takes one of two formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(parent_parent_coin_info parent_inner_puzzle_hash parent_amount)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(parent_parent_coin_info parent_amount)"),"\nYou may wonder, given the similarity, why not just use the first format?  We use the separate formats because we use the length of the structure to tip us off to whether or not this is the ",(0,a.kt)("strong",{parentName:"li"},"eve spend"),".\nThe eve spend is the first spend of a singleton after its creation.\nWe use this lineage proof to verify that our parent was a singleton.\nHowever, in the first spend, the parent is not a singleton and we actually execute a different path where we verify that our parent was a singleton launcher instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"my_amount")," is the amount of the coin being spent and will be asserted implicitly through ASSERT_MY_COIN_ID."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"inner_solution")," is the solution the to inner puzzle."),(0,a.kt)("p",null,"Next, let's look at our main entry point:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(if (logand my_amount 1)\n  (stager_one SINGLETON_STRUCT lineage_proof (sha256tree INNER_PUZZLE) my_amount INNER_PUZZLE inner_solution)\n  (x)\n)\n")),(0,a.kt)("p",null,"The control flow here is very simple.\nIf we're not odd, we raise, if we are, we pass everything through to the next stage (with the additional hash of the inner puzzle).\nOne small thing to note is that a singleton can actually be even, but it will never be able to be spent.\nEither the person will pass in the true amount and the puzzle will raise, or they will pass in a phony amount and the ASSERT_MY_ID will fail. If an attacker were to launch an even singleton or create one as one the even children of the singleton, it would succeed, but be stuck forever."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun stager_one (SINGLETON_STRUCT lineage_proof my_innerpuzhash my_amount INNER_PUZZLE inner_solution)\n  (stager_two SINGLETON_STRUCT lineage_proof (calculate_full_puzzle_hash SINGLETON_STRUCT my_innerpuzhash) my_innerpuzhash my_amount INNER_PUZZLE inner_solution)\n)\n")),(0,a.kt)("p",null,'We now move on to the first of a few "stagers". The purpose of these functions is to calculate values that are used multiple times only once.\nIn the next stage we use our full puzzle hash three times so it\'s best to calculate it once and pass it to the next function instead.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun stager_two (SINGLETON_STRUCT lineage_proof full_puzhash innerpuzhash my_amount INNER_PUZZLE inner_solution)\n  (stager_three\n    SINGLETON_STRUCT\n    lineage_proof\n    (if (is_not_eve_proof lineage_proof)\n        (create_my_ID\n          SINGLETON_STRUCT\n          full_puzhash\n          (parent_info_for_lineage_proof lineage_proof)\n          (puzzle_hash_for_lineage_proof lineage_proof)\n          (amount_for_lineage_proof lineage_proof)\n          my_amount\n        )\n        (if (=\n              (launcher_id_for_singleton_struct SINGLETON_STRUCT)\n              (sha256 (parent_info_for_eve_proof lineage_proof) (launcher_puzzle_hash_for_singleton_struct SINGLETON_STRUCT) (amount_for_eve_proof lineage_proof))\n            )\n            (sha256 (launcher_id_for_singleton_struct SINGLETON_STRUCT) full_puzhash my_amount)\n            (x)\n        )\n    )\n    full_puzhash\n    innerpuzhash\n    my_amount\n    INNER_PUZZLE\n    inner_solution\n  )\n)\n")),(0,a.kt)("p",null,"This stage looks like a lot, but really all it's doing is calculating the current coin ID for the next function to use.\nNote before we start looking at it that the lineage proof is frequently being passed to functions that are not part of this file.\nThese are part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"singleton_truths.clib")," library which we will discuss in the next stage.\nFor now, just know that it is accessing the correct values from the lineage proof and is a lot cleaner than writing things like ",(0,a.kt)("inlineCode",{parentName:"p"},"(f (r lineage_proof)) (f (r (r lineage_proof)))")," with no indication of what they mean."),(0,a.kt)("p",null,"The first if statement checks if ",(0,a.kt)("inlineCode",{parentName:"p"},"lineage_proof")," indicates that this is not the eve spend (three proof elements instead of two).\nIf it is not the eve spend, it calculates our ID using the information in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lineage_proof")," to generate our parent ID."),(0,a.kt)("p",null,"If it ",(0,a.kt)("em",{parentName:"p"},"is")," the eve spend, there is an extra check which verifies that the launcher ID and launcher puzzle hash we have (both inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"SINGLETON_STRUCT"),') are correct. We do so by calculating the launcher ID from information in our lineage proof and the launcher puzzle hash.\nWe then assert that it is equal to the curried in value.\nThis is an extremely important step because it ensures that every singleton after this singleton can trust the launcher ID and puzzle hash since it will be forcefully curried in from this "eve" singleton and every child singleton knows that the eve singleton checked it.'),(0,a.kt)("p",null,"After the eve singleton has verified the launcher info, it can now trust the launcher ID as its parent ID and create its own ID by hashing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"full_puzhash")," from the last stage and ",(0,a.kt)("inlineCode",{parentName:"p"},"my_amount"),'.\nLet\'s talk about the final "stager":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun stager_three (SINGLETON_STRUCT lineage_proof my_id full_puzhash innerpuzhash my_amount INNER_PUZZLE inner_solution)\n  (c (list ASSERT_MY_COIN_ID my_id) (check_and_morph_conditions_for_singleton SINGLETON_STRUCT (a INNER_PUZZLE (c (truth_data_to_truth_struct my_id full_puzhash innerpuzhash my_amount lineage_proof SINGLETON_STRUCT) inner_solution)) 0))\n)\n")),(0,a.kt)("p",null,"This stage is where the conditions will end up coming out of.\nFirst, it prepends an ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_COIN_ID")," so that all of the solution values we have been assuming to be true up until this point are implicitly asserted by the network.\nWe prepend this condition to the output of ",(0,a.kt)("inlineCode",{parentName:"p"},"check_and_morph_conditions_for_singleton")," which will take the output from the inner puzzle and check for singleton specific things (only one odd output, wrap the child singleton, etc.)"),(0,a.kt)("p",null,"Notice that we are prepending something to the solution before we use it to solve the inner puzzle.\nWe are using a function from ",(0,a.kt)("inlineCode",{parentName:"p"},"singleton_truths.clib")," that takes all of the listed information and combines it into a single structure to pass to the inner puzzle.\nThis allows the inner puzzle to use information that the singleton has already calculated and verified in its own puzzle at almost no additional cost!"),(0,a.kt)("p",null,"Keep in mind that this means an inner puzzle needs to know that it is going inside a singleton or else all of its solution arguments will be shifted to the right.\nAn existing inner puzzle can be very easily adapted, however, to fit inside a singleton using a shallow outer layer of: ",(0,a.kt)("inlineCode",{parentName:"p"},"(a (q . INNER_PUZZLE) (r 1))")," which strips off the first value of the solution before solving the inner puzzle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun check_and_morph_conditions_for_singleton (SINGLETON_STRUCT conditions has_odd_output_been_found)\n  (if conditions\n    (morph_next_condition SINGLETON_STRUCT conditions has_odd_output_been_found (odd_cons_m113 (created_coin_value_or_0 (f conditions))))\n    (if has_odd_output_been_found\n        0\n        (x)  ;; no odd output found\n    )\n  )\n)\n\n(defun morph_next_condition (SINGLETON_STRUCT conditions has_odd_output_been_found (is_output_odd . is_output_m113))\n   (assert\n      (not (all is_output_odd has_odd_output_been_found))\n      (strip_first_condition_if\n         is_output_m113\n         (c (if is_output_odd\n                (morph_condition (f conditions) SINGLETON_STRUCT)\n                (f conditions)\n            )\n            (check_and_morph_conditions_for_singleton SINGLETON_STRUCT (r conditions) (any is_output_odd has_odd_output_been_found))\n         )\n      )\n  )\n)\n")),(0,a.kt)("p",null,"This section is a bit unique in that it recurses by handing values back and forth to each other.\nOur main entry point is through the first block: ",(0,a.kt)("inlineCode",{parentName:"p"},"check_and_morph_conditions_for_singleton")," which checks first if we still have conditions.\nIf we don't, we check to see if the ",(0,a.kt)("inlineCode",{parentName:"p"},"has_odd_output_been_found")," flag has been set and raise if it hasn't been."),(0,a.kt)("p",null,"If we do have remaining conditions, we pass them to the next function along with the results of checking the first condition to see if it is a ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," whose output is odd or the melt value."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"morph_next_condition")," we first assert that we have not found a second odd output.\nIf we have, we raise.\nIf we have not already run into an odd output, we head to a rather confusing section of the control flow.\nThe outermost function call essentially waits for the final recursive output and strips out the melt condition if it was found.\nThat recursive output is generated by taking the first condition, wrapping it in a singleton outer puzzle if it's odd, and then passing the rest of the conditions back to ",(0,a.kt)("inlineCode",{parentName:"p"},"check_and_morph_conditions_for_singleton")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"has_odd_output_been_found")," flag set if relevant."),(0,a.kt)("h2",{id:"pay-to-singleton"},"Pay to Singleton"),(0,a.kt)("p",null,"Now that you understand how a singleton functions, we can now look at an example of \"paying to\" a singleton or locking up a coin in such a way that only the owner of a specific singleton can unlock it.\nThe idea is that you curry in the necessary information to calculate the singleton's puzzle hash and then assert an announcement from that says that it is time to claim the funds locked up in the puzzle. Since the puzzle hash will be unique to that singleton (due to the launcher ID being curried in), only that singleton will be able to create the appropriate announcement. Here's the puzzle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (\n       SINGLETON_MOD_HASH\n       LAUNCHER_ID\n       LAUNCHER_PUZZLE_HASH\n       singleton_inner_puzzle_hash\n       my_id\n     )\n\n  ; SINGLETON_MOD_HASH is the mod-hash for the singleton_top_layer puzzle\n  ; LAUNCHER_ID is the ID of the singleton we are commited to paying to\n  ; LAUNCHER_PUZZLE_HASH is the puzzle hash of the launcher\n  ; singleton_inner_puzzle_hash is the innerpuzzlehash for our singleton at the current time\n  ; my_id is the coin_id of the coin that this puzzle is locked into\n\n  (include condition_codes.clvm)\n  (include curry-and-treehash.clinc)\n\n  ; takes a lisp tree and returns the hash of it\n  (defun sha256tree (TREE)\n      (if (l TREE)\n          (sha256 2 (sha256tree (f TREE)) (sha256tree (r TREE)))\n          (sha256 1 TREE)\n      )\n  )\n\n  ;; return the full puzzlehash for a singleton with the innerpuzzle curried in\n  ; puzzle-hash-of-curried-function is imported from curry-and-treehash.clinc\n  (defun-inline calculate_full_puzzle_hash (SINGLETON_MOD_HASH LAUNCHER_ID LAUNCHER_PUZZLE_HASH inner_puzzle_hash)\n     (puzzle-hash-of-curried-function SINGLETON_MOD_HASH\n                                      inner_puzzle_hash\n                                      (sha256tree (c SINGLETON_MOD_HASH (c LAUNCHER_ID LAUNCHER_PUZZLE_HASH)))\n     )\n  )\n\n  (defun-inline claim_rewards (SINGLETON_MOD_HASH LAUNCHER_ID LAUNCHER_PUZZLE_HASH singleton_inner_puzzle_hash my_id)\n    (list\n        (list ASSERT_PUZZLE_ANNOUNCEMENT (sha256 (calculate_full_puzzle_hash SINGLETON_MOD_HASH LAUNCHER_ID LAUNCHER_PUZZLE_HASH singleton_inner_puzzle_hash) my_id))\n        (list CREATE_COIN_ANNOUNCEMENT '$')\n        (list ASSERT_MY_COIN_ID my_id))\n  )\n\n  ; main\n  (claim_rewards SINGLETON_MOD_HASH LAUNCHER_ID LAUNCHER_PUZZLE_HASH singleton_inner_puzzle_hash my_id)\n)\n")),(0,a.kt)("p",null,"Most of this puzzle should be self explanatory especially if you've gone through the puzzles above.\nLet focus on just the conditions we are creating from the ",(0,a.kt)("inlineCode",{parentName:"p"},"claim_rewards")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(list\n    (list ASSERT_PUZZLE_ANNOUNCEMENT (sha256 (calculate_full_puzzle_hash SINGLETON_MOD_HASH LAUNCHER_ID LAUNCHER_PUZZLE_HASH singleton_inner_puzzle_hash) my_id))\n    (list CREATE_COIN_ANNOUNCEMENT '$')\n    (list ASSERT_MY_COIN_ID my_id)\n)\n")),(0,a.kt)("p",null,"We are both asserting an announcement from the singleton and creating one for it.\nThe assertion is fundamental to the fact that we only want to be claimed by a very specific singleton.\nDue to the launcher ID being curried into the singleton's puzzle hash, it will be unique to every singleton and can thereby only be claimed by the singleton who's launcher ID we specify.\nWe cannot use the singleton's coin ID, because if we curried that in, the singleton could spend and then this puzzle becomes unsolvable!"),(0,a.kt)("p",null,"The announcement that we create is simply for the singleton to assert that we are also being spent.\nThis is necessary due to the fact that ",(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/security#replay-attacks"},"nodes may try and exclude this spend")," causing the singleton to spend without claiming these rewards.\nSince this coin cannot be signed, we must ensure somehow that if it is excluded, the whole spend bundle fails.\nWe use ",(0,a.kt)("inlineCode",{parentName:"p"},"'$'")," because it's one byte and somewhat relevant."),(0,a.kt)("p",null,"The coin ID assertion is simply to ensure that we are being told the truth about our id. Otherwise, we could piggy back on another claim by using that coin's ID and asserting the announcement that the singleton creates for it."))}p.isMDXComponent=!0}}]);
---
id: glossary
title: 术语表
---

> The Great Chia Glossary

本指南将作为奇亚中使用的许多概念的术语表。如果您熟悉比特币交易的工作原理，那么其中的很多内容都会很熟悉。

<details>
<summary>原文参考</summary>

This guide will act as a glossary for many of the concepts utilized in Chia.
If you are familiar with how Bitcoin transactions work, a lot of this will be familiar.

</details>

---

* **<abbr title="Coin">硬币</abbr>（TXO/交易输出）** —— 硬币存储价值。所有硬币都是作为交易的输出或创币交易奖励或费用目标生成的。一枚硬币只花费一次，让它的价值进入其他硬币，然后被永久销毁。每个未使用的硬币都被一个 Chialisp 程序锁定，这是该硬币的谜题，谁拥有解决该谜语的信息，谁就是可以花费该硬币的人。最基本的谜语有一个公钥并接受一个包含由相应私钥签名的条件列表的谜底，因此只有私钥的所有者才能解锁硬币并花费它。

* **<abbr title="Unspent Coin/Coin Set">未使用硬币/硬币集合</abbr>（UTXO/未使用交易输出）** —— 一种已经创建但尚未使用的硬币，因此正在存储价值。Unspents (UTXO set/unspent transaction output set) - 这是网络上所有未花费硬币的集合。它用于检查交易是否有效，充当谜题的查找。它将硬币 ID 映射到区块高度中的生日。交易必须包含用于计算 ID 的信息的揭示，以便它可以被验证，因为未花费的不包含该信息，只有可用于验证它的散列。

* **<abbr title="Coin ID/CoinName">硬币ID/硬币名称</abbr>（TXO ID/交易输出 ID）** —— Chia 中硬币的 ID 是通过哈希主要输入 ID、谜语哈希和按该顺序连接的金额生成的。这与比特币非常不同，比特币使用更多数据来形成 TXO ID，限制了智能币的功能。 （另见：[SegWit](https://en.wikipedia.org/wiki/SegWit)）

* **<abbr title="Coin Record">硬币记录</abbr>** —— 硬币实际存储在区块链数据库中并通过全节点的 RPC API 返回的格式。包含有关硬币的基本信息以及有关何时确认和花费的信息。

* **<abbr title="Primary Input/Parent">主要输入/父币</abbr>** —— 创建硬币时，在交易中用作输入的硬币被指定为主要输入。这用于创建硬币 ID。如果超过一枚硬币被用作交易中的输入，则其中一枚硬币被指定为主要输入，而其他硬币只是加强交易。

* **<abbr title="Spend/CoinSolution">支出/硬币谜底</abbr>** —— 支出是硬币 ID、完整谜语代码以及与谜语一起运行的谜底的揭示。花费的结果由使用谜底运行谜语后返回的条件决定。

* **<abbr title="Spend Bundle">花费组合</abbr>** —— 花费组合是一组花费的集合，带有要发送到网络的聚合签名。

* **<abbr title="Fees">费用</abbr>** —— 在一次支出中创造的新硬币数量总和与在同一支出中花费的硬币数量总和之间的差额。所有这些超额价值都作为农业奖励的一部分提供给农民。

* **<abbr title="Mempool">交易池</abbr>** —— 在完整节点中待处理的一组交易，以形成一个区块。全节点大概会尝试优化它包含在一个区块中的交易，以提取最多的费用。

* **<abbr title="Chialisp">Chialisp</abbr>** —— Chialisp 是图灵完备的函数式语言，用它编写了花费硬币的谜语。有关更多信息，请参阅我们的 [CLVM 指南](/docs/)。

* **<abbr title="">谜语</abbr> (Scriptpubkey)** —— Chialisp 程序，用于指定硬币在花费时的行为。谜语可以拒绝谜底或输出一组条件。

* **<abbr title="Puzzle"></abbr>谜底 (Scriptsig)** —— 这是一些 Chialisp，在提交交易时传递给拼图进行评估。有关交易如何运作以及解决方案如何生成新硬币的更多信息，请查看此[指南](/docs/coins_spends_and_wallets)。

* **<abbr title="CLVM">CLVM</abbr>** —— CLVM 是 Chialisp 虚拟机，它是运行谜语和谜底的沙盒环境。CLVM 仅运行 Chialisp 的已编译最小版本，尽管编译器可以将更高级别的 Chialisp 转换为已编译的 Chialisp 最小版本。查看更多相关信息[此处](/docs/high_level_lang)。

* **<abbr title="Aggregated Signature/AggSig">聚合签名/AggSig</abbr>** —— 聚合签名允许我们将多个签名压缩成一个聚合签名，这样如果我们知道公钥和值，我们就可以验证它是否存在于单个聚合中。这使用 BLS 非交互式聚合。

* **<abbr title="Augmented Signatures">增强签名</abbr>** —— 增强签名需要在消息之前添加公钥，这意味着这些签名在聚合中是安全的，因为公钥不能专门为消息（流氓公钥）制作。

* **<abbr title="Op Constraints/Conditions">操作符约束/条件</abbr>** —— 谜语通过谜底时返回条件。如果满足所有返回的条件，则交易有效。

* **<abbr title="Transaction Generator">交易生成器</abbr>** —— 存储在块中的 CLVM 程序，该程序运行包含的每个谜语和谜底，并返回作为结果输出的所有条件的聚合。当全节点验证区块链时，它们会运行交易生成器并将所有支出验证为一笔大额支出。

* **<abbr title="Wallet ">钱包</abbr>** —— 用于跟踪硬币并与之交互的软件。 Chia 使用分层确定性钱包（HD 钱包）。这意味着他们可以生成许多不同的公钥，这些公钥都是该钱包独有的有效且可验证的。如果钱包拥有解锁该硬币并创建花费该硬币的交易所需的信息，则该钱包包含该硬币。

* **<abbr title="Smart Coin">智能硬币</abbr>** —— 智能硬币是一种用专门的 Chialisp 谜语锁定的硬币，可以实现复杂的区块链交互。 Chia 中的所有硬币都是智能硬币，但这通常代表大多数开发人员熟悉的“智能合约”一词。

* **<abbr title="Chia Asset Tokens">奇亚资产代币/喵币</abbr>** —— *（以前称为“彩色硬币”）* Chia Asset Tokens (CATs) 是一种由用户创建的特殊类型的chia 硬币。 CAT 是具有唯一标记的 chia 子集，无法伪造并且可以链接到其他资产。 Chia Asset Token 标准称为 *CAT1*，您可以在[此处](https://www.chia.net/2021/09/23/chia-token-standard-naming.en.html) 阅读更多相关信息。

* **<abbr title="Authorized Payees">授权收款人</abbr>** —— 授权收款人是一种智能硬币，这意味着钱包 A 可以给钱包 B 一些钱，但钱包 B 只能以钱包 A 明确授权的方式使用这笔钱。

* **<abbr title="Decentralized ID ">去中心化身份</abbr>** —— 去中心化 ID 是一种智能硬币，它使钱包能够充当 ID，可以向其他 ID 发送消息。基于[身份基金会](https://identity.foundation/)的工作。

* **<abbr title="Currying">柯里化</abbr>** —— 一种 Chialisp 技术，其中在对拼图进行哈希处理之前预先提交谜底值。非常有用，几乎是所有 Chialisp 谜语的一部分。

* **<abbr title="Outer/Inner Puzzles">外部/内部谜语</abbr>** —— 一个描述 Chialisp 谜语常见设计模式的概念，其中“外部”谜语修改不同“内部”谜语的输出。

* **<abbr title="Delegated Puzzle">委托谜语</abbr>** —— 作为参数传递给另一个谜语的谜语，用于生成传递给的谜语的最终输出条件。只要他们首先满足其他一些标准，这用于最终控制如何将硬币花费给求解器。

* **<abbr title="Singleton">单例硬币</abbr>** —— 单例硬币是一种可验证独一无二的硬币。与 NFT 类似（但比 NFT 更强大），如果单例被销毁，则无法复制、复制或重新创建它。这是 DID、NFT 或池化协议等事物的常见外部谜语。

* **<abbr title="Pooling Protocol">池化协议</abbr>** —— 网络协议和 Chialisp 谜语的统称，可在 Chia 网络上实现池化。您可以在[此处](/docs/puzzles/pooling) 查看 Chialisp 部分的细目分类。


<details>
<summary>原文参考</summary>

* **Coin (TXO/transaction output)** - A coin stores value. All coins are generated as the output of a transaction or a coinbase reward or fee target. A coin is spent exactly once, allowing its value to go into other coins, and is then permanently destroyed. Each unspent coin is locked with a Chialisp program which is that coin’s puzzle, and whoever has the information to solve that puzzle is the person who can spend that coin. The most basic puzzle has a public key and accepts a solution which contains a list of conditions signed by the corresponding private key, so only the owner of the private key can unlock the coin and spend it.

* **Unspent Coin/Coin Set (UTXO/unspent transaction output)** - A coin which has been created but not yet spent and hence is storing value.
Unspents (UTXO set/unspent transaction output set) - This is the set of all unspent coins on the network. It is used to check if a transaction is valid, acting as a lookup for the puzzles. It maps a coin ID to a birthdate in blockheight. A transaction must contain a reveal of the information used to calculate the ID in order for it to be possible to validate because the unspents doesn’t contain that information, only hashes which can be used to validate it.

* **Coin ID/CoinName (TXO ID/transaction output ID)** - The ID of a coin in Chia is generated by hashing the primary input ID, puzzle hash, and amount concatenated in that order. This is very different from Bitcoin which uses much more data to form the TXO ID, restricting what smart coins are capable of. (See also: [SegWit](https://en.wikipedia.org/wiki/SegWit))

* **Coin Record** - The format in which a coin is actually stored in the blockchain database and returned via the full node's RPC API.  Contains the fundamental information about the coin as well as information about when it was confirmed and spent.

* **Primary Input/Parent** - When a coin is created the coin that was used as input in the transaction is designated as the primary input. This is used to create the coin ID. If more that one coin is used up as an input in a transaction then one of the coins is designated the primary input, and the others simply reinforce the transaction.

* **Spend/CoinSolution** - A spend is a reveal of a coin's ID, along with the full puzzle code, and a solution to be ran with the puzzle. The result of a spend is determined by the returned conditions after running the puzzle with the solution.

* **Spend Bundle** - A spend bundle is a collection of spends grouped together with an aggregated signature to be sent to the network.

* **Fees** - The difference between the sum of the amounts of new coins created in a spend and the sum of the amounts of the coins being spent in the same spend. All of this excess value is given to the farmer as part of their farming rewards.

* **Mempool** - The set of transactions that are pending in a full node to be farmed into a block.  The full node will presumably try to optimize the transactions it includes in a block in order to extract the most fees.

* **Chialisp** - Chialisp is the Turing-complete functional language which the puzzles for spending coin are programmed in. For more information see our [CLVM Guide](/docs/)

* **Puzzle (Scriptpubkey)** - A Chialisp program which specifies the behavior of a coin when it is spent. A puzzle can either reject a solution or output a set of conditions.

* **Solution (Scriptsig)** - This is some Chialisp which is passed to the puzzle for evaluation when a transaction is submitted. For more information about how transactions work, and how solutions can generate new coins check out this [guide](/docs/coins_spends_and_wallets)

* **CLVM** - The CLVM is the Chialisp Virtual Machine which is the sandboxed environment that puzzles and solutions are run in. The CLVM only runs the compiled minimal version of Chialisp, though a compiler can convert the higher level Chialisp to the compiled minimal version. See more about that [here](/docs/high_level_lang)

* **Aggregated Signature/AggSig** - Aggregated Signatures allow us to condense multiple signatures into a single aggregated signature, such that if we know a public key and value we can verify if it exists inside of the single aggregate. This uses BLS non-interactive aggregation.

* **Augmented Signatures** - Augmented Signatures require prepending the public key before the message, which means these signatures are guaranteed to be secure in aggregation, since the public key cannot be specifically crafted for a message (rogue public key)

* **Op Constraints/Conditions** - Conditions are returned by the puzzle when it’s passed the solution. If all of the returned conditions are met then a transaction is valid.

* **Transaction Generator** - A CLVM program stored in a block that runs each puzzle and solution that was included and returns an aggregation of all of the conditions that were output as a result.
When full nodes validate the blockchain, they run the transaction generator and validate all of the spends as one large spend.

* **Wallet** - Software written to track and interact with coins. Chia uses Hierarchical Deterministic Wallets (HD Wallets). This means that they can generate many different public keys that are all valid and verifiable as unique to that wallet. A wallet contains a coin if it possesses the information necessary to unlock that coin and create a transaction which spends it.

* **Smart Coin** - A smart coin is a coin locked up with a specialized Chialisp puzzle that enables complex blockchain interactions. All coins in Chia are smart coins but this usually stands in for the term "smart contract" that most developers are familiar with.

* **Chia Asset Tokens** - *(Formerly named "Coloured Coins")* Chia Asset Tokens (CATs) are a special kind of chia coin which are created by users. A CAT is a uniquely marked subset of chia which can't be forged and can be linked to other assets. The Chia Asset Token standard is called *CAT1* and you can read more about it [here](https://www.chia.net/2021/09/23/chia-token-standard-naming.en.html).

* **Authorized Payees** - Authorized Payees is a smart coin that means that Wallet A can give Wallet B some money, but Wallet B is only allowed to spend that money in ways that Wallet A has explicitly authorized.

* **Decentralized ID** - A decentralized ID is a smart coin that enables a wallet to act as an ID which can create messages to other IDs. Based on the work of the [identity foundation](https://identity.foundation/).

* **Currying** - A Chialisp technique in which solution values are pre-committed to before a puzzle is hashed.
Extremely useful and part of almost all Chialisp puzzles.

* **Outer/Inner Puzzles** - A concept which describes the common design pattern of Chialisp puzzles in which an "outer" puzzle modifies the output of a distinct "inner" puzzle.

* **Delegated Puzzle** - A puzzle that is passed to another puzzle as an argument and which is used to generate the final output conditions of the puzzle it is being passed to. This is used to give ultimate control of how the coin is spent to the solver as long as they meet some other criteria first.

* **Singleton** - A singleton is a coin that is verifiably unique. Similar to (but more powerful than) NFTs, a singleton cannot be copied, duplicated, or recreated if it is destroyed.
It is a common outer puzzle for things like DIDs, NFTs, or the pooling protocol.

* **Pooling Protocol** - A collective term for the network protocol and Chialisp puzzles that enable pooling on the Chia network.  You can see a breakdown of the Chialisp section [here](/docs/puzzles/pooling).

</details>

<details>
<summary>官方文档中未提及的重要术语</summary>

* **创币交易/Coinbase** - 创造硬币的原始交易，无交易输入，即由区块链创造出崭新硬币的第一笔交易。

</details>

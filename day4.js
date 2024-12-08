var test = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`.trim();

var input = `
SXMAXXMSSSMMXAMXAMXMMXXXAXMAAMAXXAMXMMAMXMASXMASXXSMMMAXXAMXAMASXMSMMMAASMSMMMXMASAXMAXAMXSAXXMXXMXSXMXAMXMXSSMXAMXSXMMSMMSMSASXXMXMMMXMMMMM
SAMXSMXMAAAASMSMXSXAXASMSSMSSSXSSSMMSASMXMAMMXMASXMMXSAMMSMAMSAMAMXSAXMMXAAXAMAXSAMXMSXSXMXSAAXAXSMMAMSMSXSASAAMSSMMAMXXAAXXAAAMASMMASAMAAAX
MAMMAXSMSMMMXAAMAMMSMASAAAXAMXAXAAAAXMAMAMMMSAMMAXXAAMASAAXXAMASXMASMMMASXMSMSXXAMXSSMAXAAAXXXMXXMAMAMAASAMXXMSMMAXSAMASMMSAMXMSAMASASASMXMS
SSMMMAXAAXSAMSMMASAAMAMMMMMMSMMMSMMMSXMSMSXXMASXMSMSMSAMXXMXMAXMXSXSXSMASAAXMAXXXXAMAMSMAMMSXSMMASXMAMMXMMMSSXMASAMMASASAAXXXAXMASAMXMAMAASM
AAXAMXMSMMMXMXAMXMXSMMXSXMAXAXXAXXXAAAMAASMMSXMMXAAXAMXAASMXXSAMXMAMAAMXMXMXMAXMMMMSMMAXMAMMMAASAMAXMXSXMXAAXASAMASAXAMXMXMMXXSSMMMXAMXMSMMA
MMSXMAAXMSMMAMAAXAAMASMMASXXXXXSSMMXSMMMSMAXSASXSMSMMSSMXSAASMMMMMAMMMSSMSXXMMSMAAMAXMMSASAAXSMMASMMMAAAAMMSSMMAXSMMXAXAMMSMSSMAMAMMSMSMXMMS
XXSASMSXXASXXMXMMMMSMMAMMMMSAMSAMXAMXXAXMMSMSAMAXXXASAMXSMMMXAAAAMMSMAMAASAMXAAXSSSXSAXAAMXAMXXMAXAAMAXMMSAMXXMXSXXSSSMMSAAASXSAMXMAXSMAMMAA
MMSMMMMMSAXMMAAXAMXMMAXMAAAMAMAASASMSSMXSAMXMAMSMXSSMMSXMAMASMMSSMMAMMSMMMMSSSXMMMMAMMXMSMSSSMSMASXMSSSMASAXXSAMXMAXXAXXAMMXMXSXSSMMSAMXMMMM
AMSXXAAMMSMAAXSSXSAAXAMXMMMXSAMXXAXAMASAMXMSSMXXXMMXSXAMMAMMMAAAAASAMAAAMSMAAMXSAAMSMAAXAMMXAAMXMAAXAMAMASMSAXXMAMAMSMMXXXMASXXMAXAMXMMMMASM
SXSASMSXAXMSSXMAXSMSMAXMAXXSMMXSMMMMSMMXSAXXAMAMSMSAMXMSSMSSSMMMSMMAMSMSASMMMMASMMSAMSSSMSSSMMMASMSMXMXMMSASMMMSMSAASXSMMASASMMSMXSMSMAMSASA
MAXMSAXMMMMAXAMSMMAXXAMSMSMSASAMXAAAAMXMMMXXAMXXXAAASMMAAAAAMSMMXMMSMMAMMMMSAMMSXMAMXAAXAAAXXAMXSAAXAMSSMMXXAAASAXMXXAAASAMAXMAAAXMAMSAMMASM
MXMXMMMXMAMMXAMXAMMMMXXAAAAXAMXSSMSSXXAAAMAMSXSMMSMSAXMSMMMSMSXMASMXXMAMXAAXMXXXAMMXMMSMMMSMSXXSMXMSMXAAXXMSMMXMAMMSXSSXMXSSSMSXMAMAMSMXMMXX
MMXXSAMASXSSXSXSXMMAMASMSMSMXMXXAAMAMMSSMMSSMAAXAXMMXXXAMXAMMSASAMXMMXSXSMSSSSSSMMXAMXAMAXAAMXXSASXSMMSSMAMAAMMMXMAAMXAMXXXAMXMMSSSMMXSXAXMM
XXMASASXSAMXXMAXXMMAMMMAAAAXAASMMMMAMXXAAXMAMSMMMMXAAXMMMMMSASAMXSAXXAMAMXXAAAXAAMSMMSASMSSSSMAMAMAXMAAAXMSMXSAMXMXSSMAMASMASMXMAXAASASMMMAM
SMAAMAMXSMMMMMAMSXSMSAMXMSMSXSAAXAMAXAXMMMXAMXXXSMMXSXSAXSAMAMSMASAMAMSAMXMMMMSSMMAAMSMMAAMMXAAMAMXMMXSSMMXAASAMMMMXAMMMAXMXAXAMMSMMMXXASASA
AASMSSSXXXAAMMMSMAAASAMXMAMAMXMXSSSSSXMAASXMXMXMXASXMAMXSMAMXMXMASAAXMAMXAAXAXAMXSMSMSAMMMXMMXMSMMSASAAMXMMMMMASXAMSSMMMSSXMASMMXAMASXSMMAMX
MMXMAMXAXSSSSXMAMXAAMMSXMXMMAXMMXMAXAASXMSASXSAAXMMAMXMMMXAMASXMXSXSSXASXSSSMMMSAXAMASXMMSSMMSAXAMXAMMSMMMXAASMMMAXAMXSAAMAXXSXSXMMMSAAAMAMX
XMMMXSMSMAAAMXSXSSMSMXMAMXSSMAMAAMMMSMMAMMAMASXMXASMMMMAASXMXXAMMMMAMAXXXMAMMSAMAMXMAMASAAAASMXMASMXMXAXXSSMMSAASMMXXAMMSSMMXMASASXMMXMMMASM
AMASMMAMMMMMMMMAMAAAXAMAMAMAXAASMMSAMXSAMMAMXMASAMXASXSMMAAMSSMMAMSAMXMSAMXMXMMSMMSMMSAMMXMMMAXMASXXMSMSXMASAXMMMAMSMAXAMXMAMXASAMAXAMXAXXXA
XAMXAMAMAMASAMMAMMMMSASMMXSSSMXAMXMMSASXSSSXSAMAAXAAXAAXSMSMAAMSMMMXMASXMMXMAXXMXAXAXMASASXXSXSMASMSAAAMMMMMXMAAXAASXXMXSAXMAXXXASAMXSSMSMSM
MXXSXMXSXSASASXMMSAMMXAAXAMXAMSMSMSXMAMAMAMMSAMASXSSMAMMXXMMSXMAAAMMSMSASAAMMMMSMMSMMSXMASAASAXMXSASMMAMSXSAMXMMSMASASASMMSXSSSSXMAMMMMMAAAX
ASMMXSAMXMASAMMMAXAXMXSXMXMSAMAAMAMXMAMMMAMASAMAXAMXAAAMXSMAXASXMXMAAAXAMSXMAASAAAMAAMXMAMMMMAMMMMAMAXMAMAMAMAAAXMAMAAMXAASMAAAXXSAMAXAMMXMX
MXAAASXMAMMMMAAMMMSMMAMSMAMMMMMAMAMXXMSXMSMAXXMAXAMAXMAXAXMASXMSAAMSMSMAMAMMSMSASAMMSSXMSSMAXMMAMMSMSMXAMMMAMSMMXXSMSMMSMMSAMMMMMSXSSXSMXSSM
XSMMXSXSASMMSSXSXAMSMXSAMASAMSXSSMMSAMMMMXMMMXMMXAMSSSXMSSMMXXAMMMMAAXMAMAMAMASXMAXAXXXMAAMXMASXMXMAXMMASMMXXMASMXXAMXMAXXXXMMMSXMASXMMSMAXA
XXXMAMASASXAXMAMMMMAMMXMSAXASAAAXAASAMAMXSASMSASXSXMAMAXMAMXAMSMMAMMXMAMSAXXSAMMSXMMSXSMSSMSMAAAASMMMSMASXSAASAMAAMMMSSMSAMXSXMXAMMSAMAAMMMS
SASMASAMXSMSMAASMXSAMXAXMXSMMMMMMMMSAMXSAMSAAMASMMAMSMMXSAMMMXAAMAMMXMXXMMSMMASXMAMMMAXAAAAMMAMXMSAAAAMXMAXMMMXAMXSAAMAMXXSAMXXSXMXMAMSXXMAM
AAXSASXSXXAAXSMSXAMXSXMMAAMAAXAXAMAMASAMXMMMXMAMMSAMAAMMSXMAMXXMMSAMAXASXAAASAMAXXMAMSMSMMSMMASAAXMMSMSAMXMXXASXSMSMMSAMMXMAMXASMMASAMASMMSX
MMMMMSAMMMMMXMAXMMMXMMSMMASXMSMSXMASXMASMSSMAMMSASAMMXMAMMSASXSXAXASXSAMMSMMMMSSMSSMMXAMSMMASASMSMXMAMXAXAMXMMSAAASXMSAXSAXMSSMXASAXAXAXMAMS
XASAAMAMMAMSXMAMAASMSAXAMASXMAMSMMAXASXMAAASMSXMMMXMASMMXAMAMMAMXSAMXMXMAMSMSMAMXAAAXMAMMXSMMMSAMXSMMMMMSSSXMAMXMMMAXSXMXXSXXAXMXMMSSMMSMAMS
SXSAMSXMSSSMAXSSSXSAMMSSMAXASMMSAMSSMMMMMSXMXAXMSSMMMAAXMXMXMSAMMMAAXMAMSXAXAMASMSSMMSXMAASAXXMAMMXAAAXMAMXXMASAXAXMMMMSMMMXMXMXAAAAAMAXMMXX
SMMXXSAMXMAMXMMAXAMXMXMAMAXMMSAMMMAAXMAAAMASMMMAAXAAXMAMSMSSMSASXSSMXSMSMXMMXMAXXMAMXXAMMMSAMMXMXMSSMMMAASXXSXXMXXSMSMAAAMASMSMSMSXMASMXXSSM
MAAMMMASASAMXMMMMXMAXXSMSSSMAMSMXMSSMASMMSAMAXMMSSSMSMMAXAXMAXAMXMASAMXAXAMSAMAMSSMMXSMMSMXAMSAMAXMAMSASMSMMMSMMSMSAAMMSSMAMMAAAAAAXAAAXAAAA
SMMXASMMAMXXAXAXMXSMSXSXAAAMAMMSMXAAXAAAXMXSSXAAAAAAXASMMMMSSMMMAXSMSSMMSMAAAMAMXAAXMASASASMMXASXSSSMMMMAMXAASXMAAMSMMXMXMMSSMSMSMXMASMMMAMS
SASXXSAMMMMSMSXSXAAXMAMMMXMMMMMAMMMSMMXXMSXMMASMMSMXMAMXAAAAXAASMSXAAXAXXMAXXSXSXSXMAMMMSMXSASXMAXMAAAXMAMXMXXAMMSMMMSAMMSMAAMMMXMAMXMXMMAXX
SAMXXXAMAAXAMSMMMSSMMAMAAXMXMASAMSAMXSMSAXMAAXMAMXXMASMSMMMSXMMAXSMMMSSMXMSSMSAMAXASXSAXXXASXMASMMSSMMMSAMASMSSMXXMAASASAAMSXMMMAXMSMXXMAXSM
MAMMASXSSXSXXXAAMMAMSASMSMMASAMAAMXSMAAMMMSSMSSXMXXMAMMASAXMXSMSMSSMAAAMXAAAMXAXMAMSASXSXMAXAMXMSAMXMAXXMAMXAAAMMSXMXSXMMSMMXAASMMSAXMMSSXAM
SAMMAAMAMAAXSSSMMMAMAAMAAASMMSSMMMAXAMXMXAAXMAMAASXMAMSASXSMMSAAXMMSMSAMMAMXMSMMSSMMMMMMAMSSSMSAMXSASXSASMXMMMXAAXASAMASXMAMSSMXXMXAXXAAAMXM
SXXMMXMAMMMMMAMMXSMMMMMMMXMSAAXXAMSSSXXSXMASXASMMAAMXMMASAXMAMSMMMAXMMAXSXSSXMXAAMXMAAAMXMAAAMMMAXXXMAMAXMASMSSSSSMMASAMAMXMMASXAMMSMMMMSASX
SXXXMXMXSAAAMAMAXSAAAASAMSAMMMMMXSMAMXMAXMAMMMSASMSMXXMXMMMMAXMMMMAXXMSMXAXXAMMMMSASXSSSXSMSAMAMAMMAMXMMMMXMAMAMXAXMMMMSSMMMSAMXAMAMAXSAXMMM
SXMASAMMSXSSSSSXMSMMMMMASMXMSASMSSMAMMAMMMASAMXAMAAXMXMAMXAMXXMAAXXSSXMMMMMSSMMAXSXSAAAXAXMXMXAMAXSASXSSSMSMMMMMMAMAAAXXXAMXMMMSSMASAMSAMXAM
XAMAAASXMAMAAAAXXMSMXSMMMAMXSASXAXXAXAMXXSASXSMSMSMMMMSAMSXSSSSSMSAAAMAAMSXMAMMMXSAMMMXMMMMASMSSSXMASAAAAAXXXAAMSXMSXXMAMXMAMSAMXSASXMMAMSSS
MXMXXSMAMSMMMMMMSMAMAMASMSMAMAMMMSSMXSAMXMASAMAAAAMAAMXSMSAMAAAAAAMMMSSXXSMMAMASAMAMAMAXMAMXMSAAMXMXMMMSMSMMSSSMSAAXASMSMSMAAMAXAMXSAMMMMXAX
MAXXSAMSMMASXMSAMXAMAMMMAAMXMAMMXMASAXAMAMAMAMSMSMSSXXAMXMAMMMMMMMSXXAMMMSASASAMXXAXASASMMSSSXMSMSSSXXMXAXXAMAAAMMMMAMAASAMXXSSMSSMSXMASMAMS
SSSMAAAXASAMAAMSXSSSMSSMXMSMSSMSASXMMSMSMXAMXMXAAAXAAMSMASXMAMXSSXMXMAMAAMAMXMASASXSMSMSAMAMXAXMASASAMMMMMASMSMMMAAMAMSMSMSSMAAXMAXMASXSAMXA
SAAASMMMXMAMMXMXMAMAMXAAASAMXAASAMXAAMXSASXSMAMSMSMMMMXAXMAXXSAMMAXAXSSMSSSSXSAMXXXAXMAXAMASMSMMXMAMXAAAMAXAXAMSSSSSXMXAMXAAMSMMSMMSXMAMMSSM
MAMMXMMSMMXXXMXXMMMSMSMMMSASMMMMAXSXMASMAXXAXXXXXMASAMXSAXAMSMASMMMSAMXMMAAAAMXSMSSMMMMMASXSAMMSAMXMASXXSSSSMSXAAMXMMMMSMMSXMAXMAAMMMMAMSAXX
MMXMXXAAAXMAMSMMMAAXMSAAASMMMMASXMAMXXXMAMSXMSMSASASASAMSMSSMAAAAXAMMASMMMMMMMMMAMAAAAXSXMXMXMAXXSASMMSMMMAMAXMMSMAMSMAAXMMXMAMSSXMXAMASMXSS
SXASMMSSSMAAMAAAMMMSASMMMXXSASXSAAAAXMSXSMSMAAAMAMXSAMASAMXAMMMXSMSSMASAAXXSXSXSXXAMMSXSASXSXMXSAMXSAAXMAMAXMMMMAMASAMSSSXMAXSAAMAXSSSSXMXMA
MMMSAAAAMMSMSAXMXAAMAMXSAMXSASASXMXSAAMXMASMSMSMAMAMMMXMXXMAMXSAAAAXMAXMMMMMASAMASMMMXXMASAMXXMAMMMSMMSXMSMMAAXSASXMAMXXMASXSMMASMMAXXXASMSS
XAXXMMMXMXAXXMASXMXSASMXMAMMAMMMXMAXMSMMMXMXXAAXAMASXXXAMXSSMAMXAMXSMXMAAXAMAMAMAMAAMSMMAMXMAMSAASAXMASXAAAASMMMXMAXSMAMMAMXAXMXMXAMXMXSMAXM
XMSMXXXASMMSXSAXAAXMAXXMAXXMMSXMAMMSXXMASXSAMXMMMXAXMMMXSMAAMXSMMMMMAASXMSSMASAMXSXMMAAMXMMASAMMSSMXMASMSMSMXAXXXXSAMMMMSSSMMXAAAXMAXAXMMSMM
SAMXSAAXMAXXAMSSMMSMASMMSSXMASASMSAMMXMXSAMXSMMASMMXSAASMMMMMASAASAMMMMAAXASAXASASMMSSSSMSMAMXSXXMASMMXAMXXXMMSSMAMASAXAAXXAXSSMSMMSMSMXAAXM
ASMAXMASMSMMMMAXXAXMAMAAAMAMXSAMAXAXMAMAMXMMMASAXAXAMXXXXAAXMXXXMSASMSSMMSMMMSMMXXAXAAAXAAMXSAXMXMAMAAMSMMMMMXAAMXMAMMMMXXXSMMXMXXAAAAAMSMSS
MAMMSXXXMAXXAAXSMMXMMMMMMMSMMMXMXSAMSMSAMXMASXMAMSMMMSXMSMSSMMSSMSAXAXXXAAAMXAXAMMSMMMSMSMSAMMMMMMAXMXSXAAAASMSSMAMASXSSSSMMASAMSMXSSMXMAAAA
XMXMAMMXAAXSASXMAXASMSSXSAXXMAXXMXXAAMAASAMXSMASMMASAAAMAMAXAAXXAMMMSMSMSSSMSMSXSXXAAAMAMXMMXAAXMSMSMXAXMMSMSAAAXXSASAXAAAMSAMAASAMMAMSMMMAS
MXSMAMXSXMMSAXASXXXSAAAAMMMMMSMMSMMMMSSMMXSXSXAMMXAMXSSSSMASMMMMMMXAMAMAXAMAMASAMAXSMXSAXMASMSSSMAAAMXSXSXMXMMMSSMMMMXMMSMMMAXMMMAMSAMAXSSMM
MMAMXXAMASAMMMXMSAAMMMMMSSXSAAAAMAMSMAMAMXXAXMASXMMMXMMAMMAXAMASXMMSSSMSMSMAMXMAMAMMXAMMMAXXMAAAMAMASMMAMXMASAMAAASXMMSXMAXMAMSASAMXXMAXXAAA
XSSMSMASAMMSAMAAXMXMAXAXAAAMMXSMMAMAMASAMMMSMMAMAMXSXSMMMMSMSAMXAXAAXAAXAMSMSXSXMXSMAMMSMMMSMMMMMXSASAMXMASMMAMXSXMMSAAMSMMSMXMASASMXMXMSSMM
MMAAXSAMXSASASMAMMSSXSMSMMMMXAMASXSMSXSXSXAAAMMSAMXAASAMSXMAMAMSMMSSMMMMSMAXMAXAMMMXXXAAAAXAAMMSAMMXSXMXXAXXSXMAMAMASMMXAMXSXSMXMAXXAXAAXAAS
ASMMMMXSAMXSXMXMASAMASMMXSXSMASASAAASXSXSMSXSMAXMMSMMMAMXAXMSMMAAMAMAAXSASMMXMMAMAMXMMSSSXSSXMAMAMSASMSMMMXMXAMASAMMXAXSMSXMAMSAMXMSMSSSMXMS
XXASMMMMXSAMAAMSXSXMAMAXSMAXMMMAMMMMMMSAMXXMXMAMSAMXXSXMSMMMAASXSMSSXMXSASXMASMSMXSAAAAXAMXMAMMSSMMASMAAAMASXMMASAMXSXMAXXAMSMXMASMAMAAAMSMM
MSAMAMSMAMAMSSMXMXXMXSXMAMMMSXMXMXXXSAMXMAXMMMXAMXSMXAAMAMAMSMMAXAMXXSASXMXMAMAXSASMSMSXMAXXXMAAMAMMMMSSMSASAAMXSXMXAXXSSSXMAMXMAXXXXMMMMAAA
MXASXMAMXSAAMAASMSMXMAXMAMXAMXAXMASMXSXAMXSMASMMSMSMXMAMASAXXMSXSAMMMMAXSAXMAMSMMMSXMXMASMSMSMMXSAMSSMXXMMMSXMMMMMMMMMMAXMAMXAAMMSSMSMSMSSSM
MSMMMAMMMSMSXMMMXAXAAAMSSSMAMMXMASXMAMSMSAXXAMAXXAXMMXMSMSXXAMMMMAXSAMXMSXSMSMMAAXMASASXMAMAAMAXMASAXMAMSAMXXMAMAAAAAXAMXXXMASXSAAMAAAAAAXMX
XAAAAAXAXXAAASMMXMSMMSAAAXMSMMMMSMMSAXAMXMAMMSMMMMMXMAXAMXMMSMAXSAMASMMXXASXMASXMXSAMXSAMXMMMXMSMXMXMMSSSXASXSASMSMMMAMXMXXSAXAXMXMXXSMMMSXM
XXXMXMMXSMSSMMASXXXMAMMAMSAMXAAMAAAMMMXMAXAMAAAAXAAXXMSASMSAMSMMMASAMXSAMXMAMAMXSAMXSXSXMAMASAMXMAAAMXMMXMAXXSASAMASMMXAAAASAMXMXMSSMMMXAMAM
ASXSAMMAMXAAXSASAMXMXXXAXXMMMSSSSMMXSAMMXXAMSSXMSXMSSXMXMAMAXMSAMXAAXMAXMMMMMSSXMASMSAMXMXSASASASMSMSAAMMSMMXMXMAMXAASXMMSMMAMASXAASAAAMMSAM
XAAXASAMMASXMMSSXSMMASMMXSAXAMAXXAXAMAXASXSMMMMMMXMAMXSAMXMMMXSXSSMMSXMXSXMAAXMXSXMAMAMAMXMAMMMASXXASXSMAAAMAMXMXMMMXMAAXMAMXSASMSAMMMMSAMAX
SSSMAMMXMXMXMXMMAAASASAAAAASXMMMSXMMSSMMSAAXAXXMAAMAMAMASAMASMSAXMAMSXSAMASMMSAAAMSXSAMMMAXMXSMMMMMXMMMMMSMMAXXAAXSXSSXMMSMSXMMSMMXXSXMMMSSM
AAAMXMXSXAXXXSAMSMXMMSMMMMMMAAXXMASXAMAXMXMXSXXMXSSSSSSXMASASASXMSSMMAMMMAMMMMMMSMAMSMSMSMSMAMAAAXMAXAXXXAXSXMXSMSXAAXXSAMXSAMASXMAMSAMAXAAX
MSMMXMASMMMSMMAMMXMMAMXSXSMXSMMSMMAMXSMMMMMXXMMSXAAAXAAAXXAAMAMXXAAAMXMAMXSXXAASAMMMXXAMAAAMMMSSSSMMSMMMMMMMAMXMMXMXMMXMASASXMASASAMSAMAMSSM
XAXSMMAXAAXAASMMMAMMASXXAASAMXXAXSAMXSMAAAMMXAASMMMMMXMMMMMMMSMMMSSMMXMXXXAMSSMSASXAMMSSMSMXSAXXMAMXAAASASASAMAXMAXXAMXSAMMSMMXSMXAMXXMXMMXA
XMXMAMMSSMXMMMAASAMXASAMXMASXSSMXSASAMSSXMSAMMMSASXXXAXAXAAAXXMAXAMAAXAAMSAMAXMSMMMMSAAAAXAAMXMXSSMSMSMSASXSXSAXXASMMMMMXSASAMAMMSMMMMMXMSSM
MSSSSMMAAMXSXSXMSMSMMXMMSXMAXMAMASMMAMXMAAAXMAAXAMMSSMSMSSSSSSSMSASXMXMMXAAMXSMXAMXAMMXMMMMMSMMXAAASAXAMMMAMAMMSMMSAXXXAAMASXMASAAAAAAXSMXAM
MAAAAAMSMMAMAXSXMASMMSAXAMXSASAMMSXSXMAMMMMASXMMAMAXXAAAMAAAAXXXSAMMAMXSXMXMXMASXMMMSMMSXSMAMAMAMMMMAAMMAMAMAMASAMSAMXMASMMMMXAMMSXSSXMXMSXM
MSSMXMAMXMASAMSXMAMAAXMMMMAMXSASASXSXMMMMXXASAMSXMMMMSMSMMMMMMMXMXMAXAMMMSAMXMMMMAMASAMMASMMSSMSAMXSSMXSASXMMXXXAMSASXSAMXSAMMSXXXAAAASAXMAS
MAAXXMASMSASAXSMMSSMSSXAXMAXASAMASAMMMSASAMXMAMAAMMAAXMXXMXMAMMAMMXMAMAAAASAMXXMSMMMSAMMAMXAAXAASMMMAAXMAMMXSMMSAMSAMASXSMMXSAMXAMMMSXMAXXXS
MXSMXMXAXMASMMSAMAAAAXMSXMASMMMMMMAMSASXSXMASAMXXXASASMSXMAMAAMASAAXMXSASMXMMSMMAMAAMXMMAMMMMSMMXSMXMMMSASXMSAAXXMMXMXMASAMXMAXMMMMXMMMSMMAS
SSXMXSAMXXMXMASAMSMMMMMMASMAXASAXMSAMXSAMAMXMAXAMSAMAMXAXSASMXXAXXAMMXMAMAMXAAAMXMXSXSSSMSXMAAMASASXAAAMAXXAMMMMSXMXSMMXMAXXXMMMSASAXSAXAXAX
SMMSAXMMMAMAMMSAMXMSSXASAMXMXMSASAMAMMMMMSMMSSMAXMAMAMAXMMXSAAMMMSMSMSMAMAMMSSXMSAMXMMAAAAAMSXMMSAMSSMSMSSMMMAAXXAMAXAXSSMMSXXAAAMSAXMASAMMS
MAAMXXXAMAXAXMMMASMAMSMMXMAMMAMMMXSAMXAASAAXAXMXMMMMSAMSAMAMMMXMAAAAAAMASXMMAMAAAAAXAMXMMMXMMASXMAMAMXXXXAMASXSMSAMSSSMMASAMXMMXMMMXMMAMMAAM
SMMSXSSXSSXMMSAXAXMAMMXMMSMMAMXAAXXASMSMSASMMMAMXAXAXAXSAMXSAAAMSMSMAMXMAXXMASMMSAASMSXSASXMMAMASXMMSMSMSAMXMXAMXAMXMXXSAMMMXAAASXMSAMXSSMXS
XMASMASMAMASASXMAXMXMMAMAAAXSXSSSSSXAAMMSXMAXASMSSSSSSMMAMMAMMMMAAMMSMSAMXSXAXAXXAXXAAXMAMAMMSSMMXAXXAAAMXSXMSXXMAMXAXXMASAMMSMXSAAMSMAXAAAM
AMAXMAMMASMMMSASMSMAASASXMSMXAMAAXAMXMAAXASXMXMAAXAAAMXSXMAMXMAXMSMAAMASMAXMSSSMASMMSMMMAMXMAXAMMSMMMSMSMAMXXMAMSXMMMSMXAMASAAMSMMMMAMXXXMXS
SMASMMSMAMAAMSMMAAMXMAAXMAMAMXMMMMSAMXMSSMSMAMMMMMMMMMMAMXMASXXSAMMSSMXAMMXMAAAMMMSXAMSSMXAMXSAMXAAAXMAXMXSAMMAMASXAAAMMMSAMMSMAXXAXAXMSXMXS
AXMAMSMMMMSMMXMMSSMSSSMXMAMSAMXAXAXSXAMXXAMMMSAMAAAAMAMXSAMXMAXMMMAXAMSMXSAMMSMMAAXXMMMAAMSMMMAMSSSMSMXXMMAAMSASMSMMMMSAASMSAXXMXSMMSXSAASAM
MSMSMAXAXMXASXXAXAAAAAXXMASAAMSXSXMAMAAAMSMAAXASXSMXXASAMASMMSMXSMMMAMAMASASXXXSMSSSMASMMMAAMMAMMAMXXMASMSMSMMASXSASAAMMMSASXMAMMAMAMXMSSMAS
XXAASMSASXMMMXMSXMMMSMMSMMMXMMMXAMXAAXMASAMMMXXMXMASMMMXMSMXAMXXMAXMAMXMASMMXMAMAMAASAMAXXSSMMSSMSAMXMXXAAMAXMAMASAMMSMSSMXMAXAMSAMSMMAMMMMM
SMMMSXMAMAASAXMASXMXMXMASASASAXMMAXMSMSMAMSAMSMSMMXMAMASXAMMSXMASAMXSMXMASASMMAMAMMMMSSXSMAAXAAAMMAMXSSMSMSASMAMXMXMXMAXAAAMMMSXMAMAASMSMAMM
MAMAMXMAMMMMAMXMASXAAMSASMSASXSSXXSAXAAAAXSMMAAMAXXSXMAMAMXAMAXXMASAXXXMXSXMASMSXMXAAXXAMMSXMMSXMMAMAXMAXAMAXMAMAMXMXMMMSSMSMMXASMMSMMAAMASA
SAMXSXSXSXXMXMXMXSSXMXMASAMAMMXMAAMAMXMSSMSAMMSMXMAMXMMSXXMASAMMXMMASASMXMASXMASAMSMMSMSMAMAMXXAMSSMMMMMMXMXMMSSMSSMASAAMAXAASXXMMAAAMSMXXSX
SMSXAXAAMMXAAMASXMAMSMMXMXMXXSAMMMMSMMXAMXSAMSMXAAASXSAAXSMXMAMXSMMMMXAMXSMMMMSMXMAAMXXXMASXSASAMAXMXASAMXXAASAAAAAMAXMMMSMXXMMMAMMSXMXMSAMX
MAMXXMMAMAMXMSAXMXAMAMSASXSMASMXSAAMAXMAMAMAMXASXMASAMMSSXAMSAMXAAAXXMMAAMXMXSAMMMAXXAMXXAMAMXSMMSSMSSSXMAMSMMMSMSSMSSSXAMMSSMSSMMAXASAMXSAS
MAMMMAXXMXSAAMXMXSMXXSXASAAMMMSASMSSXXSAMASAMMMMSMAMMMAMAMAASASXSSMSAAXMASAMXSASMMMSAMSSMAMXMMMMAAAXSAMAMMMXASAMMMXAMAMMMMAXAAAAXMASAMASAMXS
SMSMASMXMAMXSAMXAMASMMMSMXMMSAMXSAXAMXXXMAXASAAAAMSMASXMAXXMSMXMAMXSMSSMMSASMSMMAAAXAXAAMAMXMAAMMXSMMMMASMMSAMASMSMSMAMAAMXSSMSSMMAXXSXMAMAX
AAAMSXMASMMMMXXMMSASAASAAXXAMXMMMMMMASMSMMSAMXMXXXXXMXAMASXMMASAMXASAMXAAMXAMXXXMMMXAMXSXMSXSMMSSXMAMXMAMAAMAMXMAAAASXSSSSXAXXXAMMSSMAMSSMSS
MSMSAXXAXAMXMASXAMASAMXMXMMMSMSASAMXSMASAMMAMMSMSMSMMSAMXMAAMSMXMMMMMMSMMSXSSMSMSAXMXAXMASAMXSSMMASMMAMSSMMMAAMMSMSMSXMMAXMMSXSXMAXAAMXAAAAM
XXXMASMSMSAMXAXMAXXSXMMXAMAXMAAMSASMXMMMAMSAMAAAAAAAASXMXSSMMMAMXXAAMMMMAAXAAMAAMAMSMSASXMASAMMASAMASXXXAMSXSSMXAAAXMASXSXAXAXSAMXSXMXMASMMS
XSXMASAMMMMMMMMXSAMMAMXMMSMSMAMMMAMXAXSSXMMSSSMSMSMSMXAMMMMAAXAMASMMMAMMSSMSXMMSMAMAAXASXSXMAMSAMAMMMMMSMMSAMAXXMXMXSMMAXMXMASMAMAMXSASAMAXX
AASXMMMMAXASXMSAXAXXAMAMMAAAXAMSXSMSMSAXASXMMMMAAXXXMSSMAAMMMMAMXXAASXSAAAAAMMAXMMSMSMAXMXXSXMMASAMSASAAXAMAMMMMSMSASAMMMSAMXAXAMAAASXSASAMM
XMAMAAAMXSMSAAMMMSMSSMSMXMSMSMSXAAAAXSMMASAMXASMSMMXMAMXSSSMSAMXSMSMMAMMXMMMAMAMXXAMXMMMSXASMMSXMAASAMASXMSMMXSXMASAMXMSASASAMSXSMMMSAMAMXAA
MXMSSMSMAMMMMMMAMMAXAAXMSMXAAMMMMMSMXXXAXXAMSAMSAMXAMASMMMAASXMASMAAAXSSMSSXSMSXMMMXAMAAXMAMXXSXMXMMSMAMMXAMXAMAMMMMMXMAXXAMAXMAXMMAMAMAMMSM
MXXXXAXMAMSAMASASMSMMAMAAXSSMXAAAXXXSXSSMXSMMASAMXSXSASAAXMMMMAAMASMSMAAAAAMAAAASASXSMMXMMAMXMSAMSAMXMXMXSASMSMMXSASXMSSSMSMXMMAMXMAMSSXSAXA
MMMMMXMSSMSXSAMXSAXXMXMXMMMAMSSSSSMAXASASAMXMMMMSMMAMAMMMMSAMXSXMAXAXMSMMMMXMAMMSASAXASAXXASAAMXMAASXMMSXSAMAXAMAMAMAAXAXAMAMXXXXXXAMMAAMASA
MASXMMXMXASAMMSMMMMXSAMXSXSAMMAAAMMSMXMAMMXAMAAXAAMXMSMXMXSASAMAMMMAXAXXMXSSMSXXMMMAMAMMMSASXSXMASMMAMXAMMAMAXAMMMMSMMMMMAMAMXMASMSSSMMMMXMM
SASAAXMASMMAMAAAAXSASASASASMSMMMAMAMASMSMSSSSSSSSSMXAASXMASAMXSXMXMXMAMXAAAAAXXMMMMAMXMAXMMMXMASAMXSMXSMMSMMMSAMXAMAMXAMMMSXMXSAXMAMMAXXXMAX
MASMMMAXXXSXMSSSMSAASMMMMAMAAMXXAMASXXMAAAAAXAMXAAXMSASXMAXXAMXXSXSMMMMMMASMMMXSMSMMSXMXSXSAMXXMASXMXAAXAAAAAMXMSXXASXXSAXMMMXMXSMMMSMMSSSSM
MAMMMXSXMASAMAMMMAMMMMXXMXMSMSXSXSASMASMSMAMXMXMMMXXMXXAMSSSMMAXSASAAAASXAXAASASMAXXMXSXXXMAMSMSXMAMMMMMSXXMMMAMXMSMMAMSMXSASASXSAMXAAXSAAAX
SASAMXXMMMSXMAMAXSXSAXSMMXXASAAMAMXXXAMXAXMSMMASAXMXSMMSSMAAAMSSMAMSSSMSAMSSMMASXXSXMASMMMSAMXAAXSXMASMXMSSSSSXSXMAMXMASAASMSASASXMSSSMMMMMM
MASXSMMXAMMMSMSMXMXSXSMAAXSXMMSMAMSSMSSSMMMAAMASASAAAASMAMSSMMMXMAMXMXXXAMXXAMSMMXSAMAMAXAAMXMAMXAXSSXMAAMXAXMXSASXSSXMXMMSXSAMXMMMMMAAASAMA
MMMMAAMSSMXAMXAXASAMXMMAMMSASAMXAXAAXAAXAASMSMAXAXMMXSASXMAAMXMMSASAMMXSXMXSXMXMXAXAMXSSMAXMXAXXMMXMASMMSMMXMMASMMXAXAMASXXAXXXXAAAMSSMMSASM
XSASMSXXAAMSSSSSMMAMMXXXSXSAMMXSMMSMMMSMSMSAAMSMSMSXMXAMXMSAMSXXXXSASXAMXMASXMAXMASMSMAXMAXSXMSAXXAXXAMXMASMMMASXMMSMMXAXAMSMMXMSSXMAMAMSAMM
MSASAMMMMMMAAAMAASXMASMMMAMXMMAXMAMAMAAMAAXXSMXAXAMMXMAMXXMAAXXMSXSAMMAMAMMSASASAMXAAMAMMSXSAASAMSMMAMXXSAMAAMAMASXMASMMSMAXAMSAAAMMXXAMMAMA
AMAMMMAAXAMMMMSSMMMMXSAMMAMAAMMMSASXMSSSMMMSMAMAMAMMAAASXXSMMMMSAMMAMSMMXXAMMSMSMMMSMMXSAXAMMMMMMAASMMSXMASMMMSSXMASAMXXAXXSAMAMXSMMAXSSSMMM
SMSSXMSASMSAAXXAAAXXASAMSXSSSXSAMXSAAMAAXXSAMAMMSSSSXSAMXAXMAASAMMXMXSMSMMMSXMAMXXAXAAAMMMAMAAAXMMXMAAMMSXAXAAXAXMXMAMMSMSMSAMXSXAAMMMMAAXMX
AAAXMXMAMXXMSXSSSSMMXSXMXMMXMAMASXXMMMXAMXSASMSMAAXAAXASMMMSMMSAXAXSSMAAXSASMAMSMMMSAMXAASMSSSSXXSASMMMXSMMSMSSSMXAXAMAAAAMMASMMMSMMSAMSMMMA
MMMSMSMSMSSMXMAAAAMSMMASMXSAMXSAMAXSXSXXMAXMMAAMMSMXMSMMMMMMAAMMMMSMAMMMSMAMAAXAAAAMXMSSXSAAMAXAXSAXMASAXAXAAAXAXMASXMSXSMSAAXAAAAMASAXAMAAX
XAXMMAAAXXAMSXMMMMMAAMAMAXMMXAMMMMAXAMMSMASMMSAMXXXXXMXAAMMSMMMSAXMMXXSXXMXMSSSSSMSSXMXMAMMMMAMMMMXMSMMMSMSMSMSAMXMAXAMAXXXMSSSMSMSAMXSMSMSM
SSSSSMSMSSMMSMXXXSSSSMSSSSSSXSMSAXSMMMAAMXMAAXAMXMXMASMSMXAAAMASMSMXMXAASXSAXAAAAMXAMMAMAMAMMSMMAMAMAAAMAASXMMXMASXXXXMAMASAAMXAMMMMSXSXSAAA
SAXAXAAAMXXASMMMAXAAXAMXAXAAXMASASXMAMXXSASMMMMSAMXSMXAXAMXSSMMSXAMAMMMMMAMXMMMMXSAMXSASAMMAAMMSSXXSXXMSMXMASMMMSMMMMXMXSAMSMSMXMXAMXMSAMMMX
SMSMMSMSMSMMXSAMXXMSMSMMAMMMSMMMXMASASMMMXMASXMAMXAMXMMMXSAAAXXMXMSASAAXMXMAMXSMXAXSAMMSMSSMMSAAXMMMMSXXMXSAMAAMXXAAAASMMMXXXAXMSSMXMAMAMASX
MXMXMAAXXAAXXSXMSSXAAAXXAMXAXAMSSMMSXSAAAMSAMAXASMAMAAAAAMMSMSAMSXSASMMMXAMASXMMSMXMMSAXMAMAAMMMSAXAAXXAXAMXXSMMXSSMSASXAMXMXMAAMAAXXXXSMAMA
SXAASMSMSSSMMXSXAXSMSMSSXMAMXMMAAAXXXXMMMXMXSXMASXMMSXXXSMXXASAASAMXMASMSMMAMAAAXXMXSMMSMSSMMSMASMMMSSXSMXXAXXAMAAMMMMXMASMAAXMSSMMMXSAMMSSM
SMSASXAAXXAAMASMMMSMAMXAMSMSMSMSMMMXMSMSMSMXSXXXMAXAMASMMMSMMMMMMAMSAXAASXMASMMMXMAXMAXXMAXXSAMXXAAXAMXMAMSSMSAMSSXXAMASXMASMSMAMAAAMMAMAXMX
SAMXSXMSXSSSMASAXAMMAMMMAXAAMAAXMSMMAAAAAMXAMASMMSMMSASAAAAAAXXXASMXAMXAMXXAXAAAAMXMSAMSXMSMSASXSSSSXSSMAMAAASAMXMAMAXAMAMMMAAMSSSMSXMMMXMSM
MSMAMXXAXAAAMXSAMXSXSMMXSMSMSMSMAAAAMMSMSMMXSAMAAAAXMASAMXSXMXMMMXAXMMSSMMMMSSMMMSMAXAXSAASXSAXAMAAAAAXSXMMSMSXMAMSSSMASAMAMSMSAAAAMAMSAAAXX
SXMASMSASMSMMMMXMASXAASAMMAAAAXMMMMSMMXXAXSXMASXMSMMMAMMMMXMSASAMMSMAAXAASAMAAXXAAMSMSASMMMAMAMSMMMMMMAAXMXXAMXMAAXAMXMMMMXMAMMMXMAMAMMASMMM
MAMXAAXASXMASASXMASMSMMASXMMMSMSMSAXASMSSMMXSAMAMMMAMASAAXMASASASAAXXMSMMMSMXSAMSSSMSMASXAMAMAMXAMXXXMMMXSAMAMXMMMSASAXAASMSASXSSMASAMXAMAAA
SSMMMMMSMXSAXASAMASAAAMXMASXXXAXAMASAMAAAAXAMASXMASXSSSMMSMMMASAMMSMSAMXSAMXAXMAXXXMAMAMMXSMSMXSAMSMXMSMMMMSMMAXMXMAMAMXMXAXAMXMASASASMMSXMS
AAAAMXMAAMMMMAMXMAMXMXXXSAMMMMSMMMMMAMMMMSMMSAMXSAMXMAMMMSAAMMMAMXAAXAMAMAAMXSXMMXMMXMSSMXSAMXAMAMAAAXAAMXAAASMSXAMSMSSSXXSSSMMSAMMSXMAMXXAX
SMSMSASMSMAMSAMAMAXSXMSAMXSAXAXMAAAMSMSAMAAMMXSXMASMMAMSASXMSXMMMSMSMXMASMMXSMMAMASMXMAAXAXMAMSMMMMSMSSMMMXMXAAMMMXAAXAAXMAAAAAAXXMXMAXMAMSS
XAXASAXXAMAMSASXSMXMAXAXMASXSMSSSSSSMXSASMSMMMSMMAMXXMXMMSAMXXAAASAMXMXMSMXMXAAXSASMAMSSMMSAMMXAXAXAAXAASXASXMXMAMXMSMMSXMASMMMSAASAMXSMAXAX
MAMAMAMSXSAXXAMXMXAXAMMAMXSASXAAXXMAXMSAMAXXSAMXMASMSSMAMMMMAMSMMSAXAAMSXMAAMXMXMASMSXMAAXMAXASXSMSMSMSMMAXXAAXSASAMAAXXAMAMXXXXXXMASASXSMMS
MMMMMMXMASXSMAMASXMSAXXAMXMAMMMMMXMMSMMSMAMSMMXMMASAAMMMMMAMAXXMASXMASXMAXSMMMMAMAMXXASMMMSSMMSAMXAXMAMXSXMMAMMSASMSMSMSXMSMMMSMMXSSMXSAXAXA
MAAAAXAAXMASMSMMAAAMAXSASAMAMXSASXXXMMXAMMMXXSASXSMMMSMSASMSMSMMMXMASXASMXMSAAMXMXSMXAMXSXAXAAMXMMMSMAMAMAMXAMXMAMXSAMXSAAXXAAAAMAMAMSMMMSMM
SSSSMSSSXMAMAXAXMMMMXMMASXSASXSASASMXMSXMSAAAXASMAXMASAMASAAXMAMAMXXXSXMMAAASMMAMXMASXMAMMMXMMMAMAAAMASASAMXMMSMAMXMAMASMMMSMSSSMASAMAAAAXAX
XAAAAAAMXMAXAMMXASAXSMSMSMSAXXMMMMMMAMXSAAMMSMXMXSMMAMXMAMXMMMSAMXMMMMMSXXSMAMSSMMXAAAMXMAAMMXSASMSSSMSASASXSAXXMMXMXMAMAAAXXXAMMMMXSMSMMSMM
XMSMMMSMAXSMSSXSASXSAAAMMAMAMSMSAAASMMAMSMXAMMMSMMMSSMMMXSAMAAAAXASAMXAMSMAXMMAMXXMSSMMSSMXSAASAMAAAXAMAMMAAMMSSMSMSAMXSSMSSMSAMSSMASAXAAAMA
SAMXSXXMXXXAAXASAMXMMSMSMMMAMAASXSXXMMAMAXMASAAAAMAAAAMMASASMSSMSASASMMSAXMMMMAXSAMXAAAMXMAMMMMAMMMSMSMSMAMXAMAAXASAMXMMAAMXAMSMAAMAMMSMSSSS
AMSXMASXSAMXMMAMXMASXMXAXXSXSMMMMMMMXSMSASASXMSSSMMXSAMMASMMMXXMAMSXMAXSAMXMSSXMASASXMMSAMXSXSSXMASAMXSMAXXSXMASMSMSAMXSMMMMSMXMSSMXSXXMMMXX
`.trim();

var WORD = "XMAS";

var lines;
var maxRow;
var maxCol;

function getValidConnections(row, col) {
    var validConnections = 0;

    // Right
    if(isValidConnection(row, col, 0, 1)) {
        validConnections += 1;
    }
    // Left
    if(isValidConnection(row, col, 0, -1)) {
        validConnections += 1;
    }
    // Up
    if(isValidConnection(row, col, -1, 0)) {
        validConnections += 1;
    }
    // Down
    if(isValidConnection(row, col, 1, 0)) {
        validConnections += 1;
    }
    // Down Right
    if(isValidConnection(row, col, 1, 1)) {
        validConnections += 1;
    }
    // Down Left
    if(isValidConnection(row, col, 1, -1)) {
        validConnections += 1;
    }
    // Up Right
    if(isValidConnection(row, col, -1, 1)) {
        validConnections += 1;
    }
    // Up Left
    if(isValidConnection(row, col, -1, -1)) {
        validConnections += 1;
    }

    return validConnections;
}

function isValidConnection(row, col, rowDir, colDir) {
    for (var i = 0; i < WORD.length; i++) {
        if (
            (row < 0 || col < 0 || row > maxRow || col > maxCol) ||
            lines[row][col] != WORD[i]
        ) {
            return false;
        }

        row += rowDir;
        col += colDir;
    }

    return true;
}

function part1(data) {
    lines = data.split("\n").map((line) => line.split(""));
    maxRow = lines.length - 1;
    maxCol = lines[0].length - 1;

    var letter;
    var sum = 0;

    for (var row = 0; row < lines.length; row++) {
        for (var col = 0; col < lines[row].length; col++) {
            letter = lines[row][col];
            if (letter == WORD[0]) {
                sum += getValidConnections(row, col);
            }
        }
    }

    console.log(`Part1: ${ sum }`);
}

// part1(test);
// part1(input);

function isValidMasCross(row, col) {
    if (row < 1 || col < 1 || row > maxRow - 1 || col > maxCol - 1) {
        return false;
    }

    if (
        (
            (lines[row-1][col-1] == "M" && lines[row+1][col+1] == "S") ||
            (lines[row-1][col-1] == "S" && lines[row+1][col+1] == "M")
        ) && (
            (lines[row-1][col+1] == "M" && lines[row+1][col-1] == "S") ||
            (lines[row-1][col+1] == "S" && lines[row+1][col-1] == "M")
        )
    ) {
        return true;
    }

    return false;
}

function part2(data) {
    lines = data.split("\n").map((line) => line.split(""));
    maxRow = lines.length - 1;
    maxCol = lines[0].length - 1;

    var letter;
    var sum = 0;

    for (var row = 0; row < lines.length; row++) {
        for (var col = 0; col < lines[row].length; col++) {
            letter = lines[row][col];
            if (letter == WORD[2]) {
                if(isValidMasCross(row, col)) {
                    sum += 1;
                }
            }
        }
    }

    console.log(`Part2: ${ sum }`);
}

// part2(test);
part2(input);
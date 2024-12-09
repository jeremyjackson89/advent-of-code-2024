console.time("Day 8");

// var diskMap = "2333133121414131402";
// var diskMap2 = "12345";
var diskMap = "2342355037325141317463378198937791335317242410313218262273795125985343795279819494775178541788833550485457382583412354802986269996587221394031114274539291207192239390827242297152941360429691446457534596913129468114142883398878232382768292699269885947485147579359413692885924966099379930461584316843187076875248284699889599704741917740244338628164316844844331324331871343274081985720575515857254827782436040681428948293107721897514322370167220104777146149591877912441916929298574397535349781207376296573822976417135857030187735388262249234724788906272974995423898603161777386641672476040949695907963706177295842733276657657825179817948771132293073733776699799706629348957137656935893351965501529453099823357626127317116269433496950867120579311704278589342821330474085966662216586194049956912924412498195764186335032471390497142697027132177364296267551539193773384912896552170641233781552543176172023156644671879378136305695752728409595571672571058432057943721123029207176973567154970607411979122639510201272666216703048281067707112716419582526872026256890166683778978603134161610266375382364769913921685296952601221101112749098501253284725611192661721884288173287994889173212879273803934173337865273537162999548843856586466311956143871759444818293961516158544796621525556214814788163699331491092598276257473786926508564151152792564909646796464669634114092673978338959649234513892537490891149572392194554201294261253629755308733439155931698135373828629674512145237544717869379525486968850782669944540504716103655144427534521244872972679256064228117341030434069991184759953649264992865799383282359325054248138614546728591526673262652502718733584653388564342239830641919177625841950941814345527349058784443819968224093441140957274929951934721714559725643972047942517542957987194989731958360888440766233203716259644799766669758334295228174995320804067771937854815602773693684998261343493208466289382749693951561611321302918655625294830699460573418279655835843143967268287222413144554314030995230425711443053522614713253857321469516773288321270878989248731838399787268792439696475106380216435332950667451575419623890541873678014603864686383323774132683208782569071435849752051507923282080182469592993912839627077272620702678352670813625517146317427302849452377618516313086546060712782307729798760857628507413392616531089676663962569833010947796693172595973403546534322917963606876682576331842746024944987896335688973344882382578783656998237333985801094571035397629812534726849205167356281424670664682511512656777505681251416887622396463335394593428259084816045718281681116363328313446543587206298618068603171534211465584696711503862742568707519951648473310829168339995236980808838923010872155966990615018483833516625123562723828999637579724809993479252965494428985533014478182635254337126825796198021866916106877382218273966473095218393214462503071257574395652871775395614814321568782898477853652419153984975274974947117363394917675527436262590489076543363279695221796563827364662952614445777209759927331453540383922235853127583793584298165474528784750518298676245529532851160325267957488918743459119411699541964137691593735433449398555217917764967824444762483205949739777723237484131746862373339918743622934485861269760746660323042749479334570642811985665997987832243295532718438119645256362955397611839602033702612498833523960693869929997143720959587387352934399635027112631344298267138116847795961442552771340362169729695502850997288788791854289767182654715306691199057901457691116172579586342884831847946753620645467691746287446823569849716896568136295971946229943219992392548204340157245885097758165425257159699328346595377304034567875447284471369564090329463639521907865748835993929139293808062923772913679471910702675424413606674753041587516261819846388129960801717411311949352235021533410235233742686462012939778866067877918271386425338237324408688666110866876893769438144116121477792836276374451588574789513126893942873343278814916406559442198471569883576393486693627415710699063798719558436298047526772783062107145857353698128797454588766499922186218739681694856816431679771563774428094553457121287996586441010969699159018842451629494547438828035911936119129768433239489575934264496104867239848449183916364597074181176634433813629949079334118246638378159321716155346407779648244224034984510233346606271666684819712522772146073647122847213665876609120332392655570241696124871925882738787268448418117796372566137308866429299805855973477805154811321393257269525743750563027257791692884376771326048695748943223616886811350627373736963602236398964303273541686712089799555658122556671326678425716165510399594735055552767766216942415607712742721505525945621458110437756121569609883449529915438467978252754924870335274623344466225216885837847463978925436603525774093804950957340846456918011556597914054113581347036562596248840994392947663738355236263732655833811302511674823349364318295462061124321948779339473167043964944502160416032615861918446602276766957633917766774176260724596206368804692581195428041133635975125804315548697792613672783645871548429706977137817268683856665235441489762216348774861466980879010892873221990526188166450539472156173943479139077403337686568311898818963491194153041885714943376351226352469967726517898427248685070354973922380427471224094674429283083289951741165446581528433583931898584113294479472265529355885978366544255124792213275721722558246771098247528533298703074201489918436258462276268926867136244754394461354303360812157287575297874569333394886318667277164509826417952721710104049969790602353124980988823289286431370929997763486493164409564517474792562235336256912686977292023228142954988171711341764625588566269536354246332801713519341965781946474687577958185823896397240141930949431826350862358779818637858638118737985709641175783565121169323951564418656323021694549814025264650785075717596399986238651533492673177901845964614897516166937508040667849914379227715694680429829919723136933186494392027908036588799282833996874294886756662207546122067893345722214313378293284361919738131519261854168731699233834675146535714941445313819196160303838521288412134607047419115548469931481193780826985266111628986844952115926608099749758535322314323363776166687934346848724303516767859506518157896732478843257553815674710129724385145236378206117648199746419483177401387708382941328604391659330956592751512799361663061438641739875858969731533329661366123485452286526674861265565543466772087961911667478112423588921124276851446791593479360442360661212847166121691558898147344964670779344671551191011613292328580285092906585752913973791728323993187528556605667869081201661158559433659389019669710993211501418623432958898496335572882706251373641973484485555672692338851543444223841438292463613187268676072754736747814793837799860173190105380937288226354602790874685294094794221354959347912976230511612782318974129627093775631975662317641705144118966889022115630246851741850636940184215681575179783717013799752748384646367226137923941823157223194935358542466283336872614911567197027817555264138145299489096893955525584714119977787122659404776437326641713589079553312431970264334954376879934577279802786702553271468272084324669785419793871926777148184825565496659634426102852753285736257225216259052648329406042756886518780644966765432147866887161998970814710751528987584917921297922396743998057992319804495167967983467716177399021843037386985343694397891706299525085199767807267545852951549732925596944579477643031267560784543244330748550335174256124728272537273893992907984229965933445493078668062523090488180282919974581957818615827505257924572299483454561285060801769155712218295607537432156156823218760624961496181579817718439537894865333628275733556842985479674208413418134857740529558645839379489198792486465841010207472998111792776311847902145621249866334433827578485917436235381698951592658959563385361185967776426431243274613379485514527255174185438877887318290334970582068928284529294137389566980822430229453149982132126246573501166602832688165783988972414964617157651478459377632338326249842114081623079357387704621257123189595707588122632344057374642522511266360563566853868904647259123979627125185421859782645873739384577939458404463242566301820873470614953793859557037586394294111597226593866237249368921422485926034335086162119507022471422465483322622433818728972851926552599634531419175283756176116764070409270498796306742343682693577232978219216156453387139152156563755987688249235727767317963269847628294936190191139323441384337794354215736649393523772671445629636922769336390473824425768306642423445267124242986585187838065679186795112168396431446853161946613565676797436931573488672805784823422879555657235856548392111923050471955302335609756868286132467395216743239403945772293283685371946735082739439706580131276523023953850918067997997568175165184375993831153737567535365404724297660761378322789759947175936932197163015336690426655859582553635489796267517133534934943582241589658899771385677883995131595581976625558372140433895929023154511886083268887188862384853774717537025507048281369414491388361628386178541386168518753604510633058314616516624533850764799726786845249793537954572589032287370893668829353229210218013912676585027477194526132846187478482554427137786388530476621908528792778317725699155377953505457889383959162606535126060825277578137432480968377467272752934816939883445852413217870175174685999386212869543365065765484297765587741192363746261408416187625506948445059561113739782772261803818335743558268941283498434564672575722471494276811147111706035551078465043857443873068544176416173165355752727412264251618979717465090259182353963867371727755767475381911273021129197414933998677492576823833773621451012955874813483973865473564457682542976648952924253766971321120776269486581193514732119466640346662145861955021659988218336661882785317186465189662873878187390647228891751871246898426313831795787576233246539208279418464363568691777807766799588894075782667504259712660215137405457209053781432614521797210199823582448468632963671901166587763114738453375282551132499494493598975454047868658614256952979732941721647232969724452103021543184391660969010734194352337383649145361104288898899297672203556389293329854552545271931518163297420497656892712828540609172169015638742967132353822607192671365218293315743886598411151554335132651935587512324447057335855649941852430806489778316839538203774529630627663666112612618712994382214412991612292638914614423482559447613835279233669663611848286487658555117432594114117175096809762646162632311599396418396556415172149537342851550788031383024459098785274358795723129206692507438976451896161187478101626506753778012104110717339489184803065986611352389519469848591468451288627716688261668306792203893606630462668296168151924901953979824873373742780493966205280995233766855729614744623932390362622206615172641225451799317863359658978343166346266263064563866173476952745652635471049295972408659907374663080501467584421363485514436692140824690349443755538818411524540826385554966528591912053566713986223768319412384863474649778121743134395155064603522102066341387424596546216729421143022268792641179712494436238798567425298979688632035999210296738167934803065493713496831576527376339586189589639703330829873777288388569747243446394858751455235626347978479816665795246529310423569414076122757896685145890578895959078186197237297849414669921972168257854384871269135928591952516987685431923194347387172486161825270985692815846529668655571128311834031984429469026297976845460152498643536266212467848493688385814895453686051626380642796207761134610768440614694699363421298898592455454636126506867585889681681518359984769613931863017979180836428946693857367733168157141183881321679707173513052382759412275715377411166592763945013358852569432759274927099218880982192793359608998454774394882407587478428642467242784116741178358682734148160414534443123429019851988255439122957687640339991587024354183186045937432389592266770746386976071293988509595282532335082959859259952508832946157181833832763444152872997487572354493122588884071256188632169151389216465825356745946728255419153481139964811291458206371384032811032424365367656896139321076127383646853705749877215759935498078229313127629827393225893882687368893767144358741826090357348151376674913621690429260909054251767918520133629945146464595437783478089929096462852531488742682579796785669192798383084405838325095201459132011786996557748811867788998704232844963593339878011835385551798951561787120638030747712899928821418982691593280652873214364147698392013433596813843542930875786241716375930429269135236651261394114198624708990956820903587298638889620472868149958202037618080619077394054953936321142647284182790226247613863269536895857117928566522224533859873765614825133551940528170834278406458931494866554661643609433715320941211414876463921625356419948551978167317354266964922243348554187388232954835821241707492588080639834638341936614298348149474782573741628332919234541486024205559986147558849535312143449878427331157398547213263168470682542611694302619833673743979123442351299183182616412689655336653653154336218212328366118562579463147264730977292299517239028764893609084699976493033761524633698991094583764915893231335968598858275379910707967932353968663478358417485967942718835755587968727968119131053868713338081191613359254441272308918234575378962863742678346949437915027932927216385444187385188162970791575625795819070148258268244911265226119229760404165737025451432461651691693927788979541423971443566357292823331902764406836163732321634457060492833364345343512388541744455848513567529514120777553772747325572641123959646566167443749688059404686538553986895747932405722721497587918786493777170833155666424747281319114327261889795531345927736511684845498625650306568981945215648335816579199937935725533484796307629881345926397976398806162513136844072407741129571425823123060546492659330736255585480388831576795515299674938587737264064207252138033429135211690713645981195968289389013267876406861719295246838959057411730265151126511945047188280796236245251305835197440893483364981539435755675437855482188628886835714285432383210887995515744406785446074359357205431115761406649754187353531557261293713393873267918515126614662156330765023749288449734456940555711468781221421813715989583332876706049967929465216116810815763843020747734259569997050118570102133641894552258926995345610899490166747415260123422369996335429628183466340145094948896225539265111993674903727646171556197577842692143608677222988323216941148489972683928774925558691719791367078499511672347399577986388851547333869428018343970824435141669862732733536568373555524851377552393689088813394466372794044168073559943263973908793452577549931307728438292886910905741739240394824788726952069428726253775162614852982613894647772406250381394317356766489686312144798337032501643177324998154126890933350318685614250187498413848363764234677179446336246756548681443669787987326525673906924973256217376987324973742166477298493906565185524533597379417955543462463336875409772453847837225668836679950354823617222949722396458125845536668922170531348587076492472379867573749499833302477302887886974306821369036327588444056146982745799139584517190742222308313486070771358525283718393404529757389793133617748161363127942207643807884597013473652504136239750838416545724255519873752592736624180481346997910382516181035805632133276683041536353937058829840776098492734829498691023545232581377759990984960399391422288888684938460913692187556369273243113602912616087844838349818902413757521472337369383513287405170455287251488436399512392354138819427254949399074835886391888929026608245873498877274422613523620796176124614918621108116162766395143548745705044858459376783839188677747101357642196291774455815762946679288222386312370693014594694426715481430609016726537693316809192839739865639192622936236768349136752528512361680404180528617423920412550284835478257895048243888768329216162464555955336968045447818942290623044372372951217366113132557748066603176206268832461857893647616711570131526477354137392612195426825678920586611943074537298262841759755307942532223118552676296559269576445152947123050519183749822874212944729142893268818233540313552969992751759818617857728608496239473921856761811324512135357444742716343624387892111545856759150621311989850754357547638768926993944932484876346679173338832309771505863769463195995194480665041928588299274617615505147481447188270456069169139794973908271693658294727766021296737382674797442832571272656987911912767219595961393257856486591711712349069356932808720577465219768754343755633371054483597788686968128801374568174807340379989412345695039493713355569755364485858884843265967382234872867467925763445739775886446498788285860439778866938589071716724578393874880874226385628158198451630835614114780716792202887487522694780628971887956244297869429715787117119613265535542284788348190277657626216919786831761393050163154144665131276626419883329486483801962713167562845622658267581414070735637157665379227704267904491168390966928799375177322674775198629836450968437309565385919552872217032348586686646322082193172603590244967807455282463772498283393311179383545323170238623593745253881551251697793753348377936887033501036514783514850803855659638228378917746735853562723855279937049156294291712328319295697393955712911234542534376229566654282617953226152605513689870714691864250289071626670259885307817956691663230147518311716894662703523378712661762334699915847406660276568995271984122508560455385695556695527149467267156402672479838438684747711683565274067877811254538512329451654329261159535756530893065299512208279133173148091991373187936134957634191636341775835267444632370299067203481676297439744137723739822722996627559264645517195206329287321335364132355372545777983739447767812871890932253379982276187807641543526491278212487416947175240188712536258832319353357661844296282907660829846717669636349401795525693486777735012285854931899385698327822718241528975548921316211757374437114723330983290625211617889596989878453786748757120758366872423381629115736481916415978506558998884484761909946197374416912623132645520929812732334278985366077226173322243945845763833847914744120511711841873718356682222533780503657902899317396386014896044414730875236977392658991306442169095142668851128997470782725614176763611367825459251135562423746243734904730444962712862992547344163587825246371693076726313437315893616436378689138484591993952443058946259466814715098666354912831468363136493548663442895957054799627489493714195971364442210822235373642398492997296306251984743135017833690744492133039568915622289369323643845119953119486825543555498567511578190141349248455122918224387883165111145137041986980216873633677613417937026418036663638233793325737958290287774418856458088607940883683531110191510631049285772749757239813847250141414976686737543319650761729724472924281404749228045328564555537834627379669166785743539667627921550326970683248363784435784525488708396585279299422838757566735412657262973402185246722545867205467219443515348161187487342388753591548832542512477983726757898555982663772626617549711627757457462932997656367533850829464812749644962561596731920954833799747192078789720152370664188285542383210265259859457643982443449126089646145464763459072404238228763644829665795141397789376944088821639517514488590635812475611569275324570806870673622918446911587183633328779336245288659466688999820289645188742828021149149137694488065575033168598487678838524739576768993445667543862111161567497779967986690939143148652373610119018808760212416996968696358945614438922636780707349259411311067272126579642318221993365298458416497136268402389444972201647567610998126491273125174299546336433968012109873646110515379726522699272805888123366707298108028487439239861642290472199962750199776716136191455166375875630919044652439602064357593186133188131466690167831688981933094239959983231232034111044847934367967251153227669637011571313723669235220707931699866663817391853559777171736158393598340925377192744863750182144949746388025602719582618464919207";

var FREE_SPACE = ".";
var fileBlocks = [];
var files = {};

var fileID = 0;
var free = 0;
var used = 0;
for (var i = 0; i < diskMap.length; i += 2) {
    size = parseInt(diskMap[i]);
    used = size;
    free = diskMap[i+1] ? parseInt(diskMap[i+1]) : 0;
    files[fileID] = { used, free, size };
    fileBlocks = fileBlocks.concat(new Array(used).fill(fileID));
    if (free) {
        fileBlocks = fileBlocks.concat(new Array(free).fill(FREE_SPACE));
    }
    fileID++;
};

// Part 1
// var freeSpaceIndex = 0;
// var lastBlockIndex = fileBlocks.length - 1;
// while (true) {
//     while (fileBlocks[lastBlockIndex] == FREE_SPACE) {
//         lastBlockIndex--;
//     }
//     while (fileBlocks[freeSpaceIndex] != FREE_SPACE) {
//         freeSpaceIndex++;
//     }
//     if (lastBlockIndex <= freeSpaceIndex) {
//         break;
//     }
//     fileBlocks[freeSpaceIndex] = fileBlocks[lastBlockIndex];
//     fileBlocks[lastBlockIndex] = FREE_SPACE;
// }

// Part 2
var fileIDs = Object.keys(files);
var fileA;
var fileB;
for (var i = fileIDs.length - 1; i >= 0; i--) {
    fileA = files[fileIDs[i]];

    for (var j = 0; j < i; j++) {
        fileB = files[fileIDs[j]]

        if (fileB.free < fileA.size) {
            continue;
        }

        var replaceAt = fileBlocks.indexOf(parseInt(fileIDs[i]));
        var freeSpaceIndex = fileBlocks.indexOf(parseInt(fileIDs[j])) + fileB.used;

        for (var k = 0; k < fileA.size; k++) {
            fileBlocks[freeSpaceIndex] = fileIDs[i];
            fileBlocks[replaceAt] = FREE_SPACE;
            freeSpaceIndex++;
            replaceAt++;
        }

        fileB.used += fileA.used;
        fileB.free -= fileA.used;
        break;
    }
}

var checkSum = 0;
for (var i = 0; i < fileBlocks.length; i++) {
    if (fileBlocks[i] == FREE_SPACE) {
        // break;
        continue;
    }
    checkSum += i * fileBlocks[i];
}

//6607511583593
// console.log(`Part 1: ${ checkSum }`);
console.log(`Part 2: ${ checkSum }`);
console.timeEnd("Day 8")

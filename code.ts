figma.showUI(__html__)

figma.ui.onmessage = async (message) => {
  // Roboto Regular is the font that objects will be created with by default in
  // Figma. We need to wait for fonts to load before creating text using them.
  await figma.loadFontAsync({ family: "Roboto", style: "Black" })
  
  function choice(A) {
    return A[Math.floor(Math.random() * (A.length + 1))]
  }

  let center = figma.viewport.center;

  // create codenames layout
  let basewords = ['Acne','Acre','Addendum','Advertise','Aircraft','Aisle','Alligator','Alphabetize','America','Ankle','Apathy','Applause','Applesauc','Application','Archaeologist','Aristocrat','Arm','Armada','Asleep','Astronaut','Athlete','Atlantis','Aunt','Avocado','Baby-Sitter','Backbone','Bag','Baguette','Bald','Balloon','Banana','Banister','Baseball','Baseboards','Basketball','Bat','Battery','Beach','Beanstalk','Bedbug','Beer','Beethoven','Belt','Bib','Bicycle','Big','Bike','Billboard','Bird','Birthday','Bite','Blacksmith','Blanket','Bleach','Blimp','Blossom','Blueprint','Blunt','Blur','Boa','Boat','Bob','Bobsled','Body','Bomb','Bonnet','Book','Booth','Bowtie','Box','Boy','Brainstorm','Brand','Brave','Bride','Bridge','Broccoli','Broken','Broom','Bruise','Brunette','Bubble','Buddy','Buffalo','Bulb','Bunny','Bus','Buy','Cabin','Cafeteria','Cake','Calculator','Campsite','Can','Canada','Candle','Candy','Cape','Capitalism','Car','Cardboard','Cartography','Cat','Cd','Ceiling','Cell','Century','Chair','Chalk','Champion','Charger','Cheerleader','Chef','Chess','Chew','Chicken','Chime','China','Chocolate','Church','Circus','Clay','Cliff','Cloak','Clockwork','Clown','Clue','Coach','Coal','Coaster','Cog','Cold','College','Comfort','Computer','Cone','Constrictor','Continuum','Conversation','Cook','Coop','Cord','Corduroy','Cot','Cough','Cow','Cowboy','Crayon','Cream','Crisp','Criticize','Crow','Cruise','Crumb','Crust','Cuff','Curtain','Cuticle','Czar','Dad','Dart','Dawn','Day','Deep','Defect','Dent','Dentist','Desk','Dictionary','Dimple','Dirty','Dismantle','Ditch','Diver','Doctor','Dog','Doghouse','Doll','Dominoes','Door','Dot','Drain','Draw','Dream','Dress','Drink','Drip','Drums','Dryer','Duck','Dump','Dunk','Dust','Ear','Eat','Ebony','Elbow','Electricity','Elephant','Elevator','Elf','Elm','Engine','England','Ergonomic','Escalator','Eureka','Europe','Evolution','Extension','Eyebrow','Fan','Fancy','Fast','Feast','Fence','Feudalism','Fiddle','Figment','Finger','Fire','First','Fishing','Fix','Fizz','Flagpole','Flannel','Flashlight','Flock','Flotsam','Flower','Flu','Flush','Flutter','Fog','Foil','Football','Forehead','Forever','Fortnight','France','Freckle','Freight','Fringe','Frog','Frown','Gallop','Game','Garbage','Garden','Gasoline','Gem','Ginger','Gingerbread','Girl','Glasses','Goblin','Gold','Goodbye','Grandpa','Grape','Grass','Gratitude','Gray','Green','Guitar','Gum','Gumball','Hair','Half','Handle','Handwriting','Hang','Happy','Hat','Hatch','Headache','Heart','Hedge','Helicopter','Hem','Hide','Hill','Hockey','Homework','Honk','Hopscotch','Horse','Hose','Hot','House','Houseboat','Hug','Humidifier','Hungry','Hurdle','Hurt','Hut','Ice','Implode','Inn','Inquisition','Intern','Internet','Invitation','Ironic','Ivory','Ivy','Jade','Japan','Jeans','Jelly','Jet','Jig','Jog','Journal','Jump','Key','Killer','Kilogram','King','Kitchen','Kite','Knee','Kneel','Knife','Knight','Koala','Lace','Ladder','Ladybug','Lag','Landfill','Lap','Laugh','Laundry','Law','Lawn','Lawnmower','Leak','Leg','Letter','Level','Lifestyle','Ligament','Light','Lightsaber','Lime','Lion','Lizard','Log','Loiterer','Lollipop','Loveseat','Loyalty','Lunch','Lunchbox','Lyrics','Machine','Macho','Mailbox','Mammoth','Mark','Mars','Mascot','Mast','Matchstick','Mate','Mattress','Mess','Mexico','Midsummer','Mine','Mistake','Modern','Mold','Mom','Monday','Money','Monitor','Monster','Mooch','Moon','Mop','Moth','Motorcycle','Mountain','Mouse','Mower','Mud','Music','Mute','Nature','Negotiate','Neighbor','Nest','Neutron','Niece','Night','Nightmare','Nose','Oar','Observatory','Office','Oil','Old','Olympian','Opaque','Opener','Orbit','Organ','Organize','Outer','Outside','Ovation','Overture','Pail','Paint','Pajamas','Palace','Pants','Paper','Paper','Park','Parody','Party','Password','Pastry','Pawn','Pear','Pen','Pencil','Pendulum','Penis','Penny','Pepper','Personal','Philosopher','Phone','Photograph','Piano','Picnic','Pigpen','Pillow','Pilot','Pinch','Ping','Pinwheel','Pirate','Plaid','Plan','Plank','Plate','Platypus','Playground','Plow','Plumber','Pocket','Poem','Point','Pole','Pomp','Pong','Pool','Popsicle','Population','Portfolio','Positive','Post','Princess','Procrastinate','Protestant','Psychologist','Publisher','Punk','Puppet','Puppy','Push','Puzzle','Quarantine','Queen','Quicksand','Quiet','Race','Radio','Raft','Rag','Rainbow','Rainwater','Random','Ray','Recycle','Red','Regret','Reimbursement','Retaliate','Rib','Riddle','Rim','Rink','Roller','Room','Rose','Round','Roundabout','Rung','Runt','Rut','Sad','Safe','Salmon','Salt','Sandbox','Sandcastle','Sandwich','Sash','Satellite','Scar','Scared','School','Scoundrel','Scramble','Scuff','Seashell','Season','Sentence','Sequins','Set','Shaft','Shallow','Shampoo','Shark','Sheep','Sheets','Sheriff','Shipwreck','Shirt','Shoelace','Short','Shower','Shrink','Sick','Siesta','Silhouette','Singer','Sip','Skate','Skating','Ski','Slam','Sleep','Sling','Slow','Slump','Smith','Sneeze','Snow','Snuggle','Song','Space','Spare','Speakers','Spider','Spit','Sponge','Spool','Spoon','Spring','Sprinkler','Spy','Square','Squint','Stairs','Standing','Star','State','Stick','Stockholder','Stoplight','Stout','Stove','Stowaway','Straw','Stream','Streamline','Stripe','Student','Sun','Sunburn','Sushi','Swamp','Swarm','Sweater','Swimming','Swing','Tachometer','Talk','Taxi','Teacher','Teapot','Teenager','Telephone','Ten','Tennis','Thief','Think','Throne','Through','Thunder','Tide','Tiger','Time','Tinting','Tiptoe','Tiptop','Tired','Tissue','Toast','Toilet','Tool','Toothbrush','Tornado','Tournament','Tractor','Train','Trash','Treasure','Tree','Triangle','Trip','Truck','Tub','Tuba','Tutor','Television','Twang','Twig','Type','Unemployed','Upgrade','Vest','Vision','Wag','Water','Watermelon','Wax','Wedding','Weed','Welder','Whatever','Wheelchair','Whiplash','Whisk','Whistle','White','Wig','Will','Windmill','Winter','Wish','Wolf','Wool','World','Worm','Wristwatch','Yardstick','Zamboni','Zen','Zero','Zipper','Zone','Zoo']
  let dungeonwords = ['good','evil','lawful','chaotic','neutral','barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard','strength','dexterity','constitution','intelligence','wisdom','charisma','history','nature','medicine','perception','climb','sneak','trap','poison','critical','dodge','leather','rage','sense','minstrel','music','action','turn','cantrip','level','health','language','ritual','spell','potion','sword','axe','dagger','shield','bow','book','roll','die','throw','hit','armor','heal','charm','gold','silver','copper','jewel','strike','stab','slash','kill','hit','school','arcane','eldritch','fireball','light','alarm','bless','command','disguise','entangle','grease','hex','jump','missile','sleep','bolt','blur','alter','darkness','invisible','knock','levitate','shatter','silence','web','blink','fear','fly','haste','slow','dungeon','chest','secret','door','lock','cavern','puzzle','boss','minion','passage','torch','cavern','path','crypt','necromancer','villain','goblin','orc','kobold','zombie','skeleton','rat','spider','bandit','cultist','owlbear','dragon','plane','amulet','arrow','bag','horn','cloak','cube','mail','ring','stone','staff','wand','weapon','boots','wings','sharp','spiky']

  let padding = 8;
  let cardwidth = 120;
  let cardheight = 75;
  if(message.type == 'codenames_board') {
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        let left = center.x + x * (cardwidth  + padding)
        let top  = center.y + y * (cardheight + padding)

        let card = figma.createRectangle()
        card.x = left
        card.y = top
        card.resizeWithoutConstraints(cardwidth, cardheight)
        //card.fills = [{ type: 'SOLID', color: {r: 227/255, g: 207/255, b: 182/255} }]
        card.fills = [{ type: 'SOLID', color: {r: 0x1B/255, g: 0x1B/255, b: 0x1B/255} }]
        card.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
        card.cornerRadius = 5

        let innerBorderOffset = 5;
        let innerBorder = figma.createRectangle()
        innerBorder.x = left + innerBorderOffset
        innerBorder.y = top  + innerBorderOffset
        innerBorder.resizeWithoutConstraints(cardwidth - innerBorderOffset*2, cardheight - innerBorderOffset*2)
        innerBorder.fills = []
        innerBorder.strokes = [{ type: 'SOLID', color: {r: 0x2E/255, g: 0x2E/255, b: 0x2E/255} }]
        innerBorder.strokeWeight = 2
        innerBorder.strokeAlign = 'INSIDE'
        innerBorder.cornerRadius = 4

        let wordboxwidth = cardwidth - innerBorderOffset*4;
        let wordboxheight = (cardheight - innerBorderOffset*4) / 2;
        let wordboxleft = left + innerBorderOffset*2;
        let wordboxtop  = top  + innerBorderOffset*2 + wordboxheight;
        
        let wordbox = figma.createRectangle()
        wordbox.x = wordboxleft
        wordbox.y = wordboxtop
        wordbox.resizeWithoutConstraints(wordboxwidth, wordboxheight)
        wordbox.fills = [{ type: 'SOLID', color: {r: 0x2E/255, g: 0x2E/255, b: 0x2E/255} }]
        wordbox.cornerRadius = 1

        // The label
        const label = figma.createText()
        //frame.appendChild(label)
        label.x = wordboxleft
        label.y = wordboxtop
        label.resizeWithoutConstraints(wordboxwidth, wordboxheight)
        label.fills = [{ type: 'SOLID', color: {r: 1, g: 1, b: 1} }]
        label.fontName = { family: "Roboto", style: "Black" }

        if(message.wordlist == 'base') {
          label.characters = choice(basewords).toUpperCase()
        } else if(message.wordlist == 'd&d' ) {
          label.characters = choice(dungeonwords).toUpperCase()
        }
        
        label.fontSize = 12
        //label.fontName = { family: "Roboto", style: "Black" }
        label.textAlignHorizontal = 'CENTER'
        label.textAlignVertical = 'CENTER'
        label.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}

        figma.group([card, innerBorder, wordbox, label], card.parent);
      }
    }
  }

  let RED = {r: 0xE8/255, g: 0x2B/255, b: 0x2B/255};
  let BLUE = {r: 0x2B/255, g: 0x77/255, b: 0xE8/255};
  let DARKGRAY = {r: 0x1B/255, g: 0x1B/255, b: 0x1B/255};
  let BLACK = {r: 0, g: 0, b: 0};
  let BEIGE = {r: 227/255, g: 207/255, b: 182/255};
  let WHITE = {r: 1, g: 1, b: 1};
  
  if(message.type == 'codenames_spycard') {
    let card = figma.createRectangle()
    card.x = center.x
    card.y = center.y
    card.resizeWithoutConstraints(cardwidth, cardwidth)
    //card.fills = [{ type: 'SOLID', color: {r: 227/255, g: 207/255, b: 182/255} }]
    card.fills = [{ type: 'SOLID', color: DARKGRAY }]
    card.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
    card.cornerRadius = 5

    // 0 = RED, 1 = BLUE
    let firstTeam = Math.round(Math.random())

    let teams = [RED, BLUE];
    card.strokes = [{ type: 'SOLID', color: teams[Number(firstTeam)] }]

    let colors = [].concat(
      BLACK,
      new Array(8 + (1-firstTeam)).fill(RED),
      new Array(8 + firstTeam).fill(BLUE),
      new Array(7).fill(BEIGE)
    );

    let itemsToGroup : any[] = [card];

    for(let x = 0; x < 5; x++) {
      for(let y = 0; y < 5; y++) {
        let color = choice(colors);
        colors.splice(colors.indexOf(color), 1);

        let tilesize = (cardwidth-20)/5-2;

        let left = center.x + 10 + (cardwidth-20)/5*x;
        let top = center.y + 10 + (cardwidth-20)/5*y;

        let tile = figma.createRectangle()
        tile.x = left;
        tile.y = top;
        tile.resizeWithoutConstraints(tilesize, tilesize)
        //card.fills = [{ type: 'SOLID', color: {r: 227/255, g: 207/255, b: 182/255} }]
        tile.fills = [{ type: 'SOLID', color }]
        tile.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
        tile.cornerRadius = 1;

        if(color == BLACK) {
          const label = figma.createText()
          //frame.appendChild(label)
          label.x = left
          label.y = top
          label.resizeWithoutConstraints(tilesize, tilesize)
          label.fills = [{ type: 'SOLID', color: WHITE }]
          label.fontName = { family: "Roboto", style: "Black" }
          label.characters = 'X';
          label.fontSize = 8;
          //label.fontName = { family: "Roboto", style: "Black" }
          label.textAlignHorizontal = 'CENTER'
          label.textAlignVertical = 'CENTER'
          label.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}

          itemsToGroup.push(label);
        }

        itemsToGroup.push(tile);
      }
    }

    figma.group(itemsToGroup, card.parent);

    let overlay = figma.createRectangle()
    overlay.x = center.x
    overlay.y = center.y
    overlay.resizeWithoutConstraints(cardwidth, cardwidth)
    //card.fills = [{ type: 'SOLID', color: {r: 227/255, g: 207/255, b: 182/255} }]
    overlay.fills = [{ type: 'SOLID', color: BLACK }]
    overlay.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
    overlay.cornerRadius = 5
  }

  
  
  

  /*const frameWidth = 800
  const frameHeight = 600
  const chartX = 25
  const chartY = 50
  const chartWidth = frameWidth - 50
  const chartHeight = frameHeight - 50

  const frame = figma.createFrame()
  frame.resizeWithoutConstraints(frameWidth, frameHeight)

  // Center the frame in our current viewport so we can see it.
  frame.x = figma.viewport.center.x - frameWidth / 2
  frame.y = figma.viewport.center.y - frameHeight / 2

  // Border for the chart
  const border = figma.createRectangle()
  frame.appendChild(border)
  border.resizeWithoutConstraints(frameWidth, frameHeight)
  border.strokeAlign = 'INSIDE'
  border.strokeWeight = 3
  border.fills = []
  border.strokes = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0} }]
  border.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}

  // Line at the bottom of the chart
  const line = figma.createRectangle()
  frame.appendChild(line)
  line.x = chartX
  line.y = chartY + chartHeight
  line.resizeWithoutConstraints(chartWidth, 3)
  line.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0} }]
  line.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}

  const min = numbers.reduce((a, b) => Math.min(a, b), 0)
  const max = numbers.reduce((a, b) => Math.max(a, b), 0)

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const left = chartX + chartWidth * (i + 0.25) / numbers.length;
    const right = chartX + chartWidth * (i + 0.75) / numbers.length;
    const top = chartY + chartHeight - chartHeight * (Math.max(0, num) - min) / (max - min);
    const bottom = chartY + chartHeight - chartHeight * (Math.min(0, num) - min) / (max - min);

    // The column
    const column = figma.createRectangle()
    frame.appendChild(column)
    column.x = left
    column.y = top
    column.resizeWithoutConstraints(right - left, bottom - top)
    column.fills = [{ type: 'SOLID', color: {r: 1, g: 0, b: 0} }]
    column.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}

    // The label
    const label = figma.createText()
    frame.appendChild(label)
    label.x = left - 50
    label.y = top - 50
    label.resizeWithoutConstraints(right - left + 100, 50)
    label.fills = [{ type: 'SOLID', color: {r: 0, g: 0, b: 0} }]
    label.characters = num.toString()
    label.fontSize = 30
    label.textAlignHorizontal = 'CENTER'
    label.textAlignVertical = 'BOTTOM'
    label.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
  }*/

  //figma.closePlugin()
}

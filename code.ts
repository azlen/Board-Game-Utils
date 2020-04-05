figma.showUI(__html__)

figma.ui.onmessage = async (numbers) => {
  // Roboto Regular is the font that objects will be created with by default in
  // Figma. We need to wait for fonts to load before creating text using them.
  await figma.loadFontAsync({ family: "Roboto", style: "Black" })
  

  // create codenames layout
  let padding = 10;
  let cardwidth = 120;
  let cardheight = 75;
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      let left = x * (cardwidth  + padding)
      let top  = y * (cardheight + padding)

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
      label.characters = "test"
      label.fontSize = 30
      //label.fontName = { family: "Roboto", style: "Black" }
      label.textAlignHorizontal = 'CENTER'
      label.textAlignVertical = 'CENTER'
      label.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
    }
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

  figma.closePlugin()
}


// flex container properties
/*
1. In this video let's take a look at the terminology which is required to have a proper understanding of flexbox and how it works when we talk about flexbox. We mainly have two entities a parent container which we term as the Flex container and the immediate children elements which we term as Flex items. If you take a look at sample HTML the parent div is the Flex container and all the children divs are the Flex items and we also deal with two axis when working with flexbox. The main axis and the cross axis. By default, the main axis runs left to right(---->) and the cross axis(top to bottom) is perpendicular to the main axis and runs top to bottom. The starting point of the main axis is termed as main start and the end point is termed as main end. The length from main start to main end is called the main size. So we can say that the Flex items flow from main start till main end and take up the main size as the length. Similarly with cross axis, we have cross start cross end and cross size(top to bottom). We can also change the direction of the main and cross axis. But we will talk more about that later in the course. Now understanding flexbox is basically getting familiar with the properties associated with the Flex container and the Flex items. Nothing fancy we just learn it like have you learned CSS. Know what properties exist and how they work. 
*/

/*
Display-> flex-direction->flex-wrap->flex-flow->justify-content->align-items.

2. Let me list down all the possible properties that can be applied to a Flex container first. We have the display property. This is what defines a Flex container and is mandatory to work with Flex box. Next is flex direction, it defines the direction in which the Flex items are placed in the container. Third we have flex wrap which is used to control the wrapping of items within a container. We then have flex flow which is a shorthand for the combination of flex direction and flex wrap. Then there is justified content that defines the alignment of the items along the main axis. Similarly, we have the aligned items property which defines how flex items are laid out along the cross axis. Finally we have the aligned content property this is similar to justify content with the difference being, this will align along the cross axis instead of the main axis and also aligned content works only when there are multiple rows of Flex items in the container. 
*/

/*
 ** display property-> flex, inline-flex
// Create either a block level or inline level flex container(flex container)
.container {
  display: flex;
  border: 6px solid black;
}
.container {
  display: inline-flex;
  border: 6px solid black;
}
3. We have a parent div tag that has a class container. Now, this parent container has nine divs as children. Each div tag has a class flex-item and also a class specific to the item number - item -1, item-2, item-3 and so on. Coming to the CSS, first, we set a margin:0 on the body. Next on the container class, we set a really thick border because it's important that we are able to identify the boundaries of the container. So the border is 6 pixels solid black. The flex-item class has font color, font size, padding and text alignment properties. Each of the individual flex-item classes have a background color to visually separate the items in the browser. Now if you open the HTML file in the browser, you should be able to see this particular layout. You can see that we have nine items enclosed within the container that has a solid black border. Now, let's focus on our very first property which is the display property to create a Flex container. We make use of the display property and set it to a value of flex. So in the CSS on the container class display:flex. Now if I refresh the browser, you can immediately see the change. The items are now laid out from left to right instead of the traditional way where the divs stack up top to bottom. Also you can make out from the border that the container has 100% width. So it does behave similar to a block level element. If you do not want a block level flex container, you set the display property to inline-flex to create an inline flex container. So let's go back to the CSS file and change Flex to inline-flex. Now if I refresh, keep an eye on the border and you can see that the border now wraps around the flex-items. The container only takes up enough space to accommodate its children and make sure the display property is always set or none of the other properties are going to work on the Flex container. That's all there is to the display property. So the display property is used to create either a block level or inline level Flex container. The possible values are flex and inline-flex.
*/

/*
flex-direction-> row(default), row-reverse, column, column-reverse
// sets the direction of the main axis.
.container {
  display: flex; 
  flex-direction: row;      (default)
  border: 6px solid black;
}
.container {
  display: flex;
  flex-direction: row-reverse;
  border: 6px solid black;
}
.container {
  display: flex;
  flex-direction: column;  (main axis' direction is changed from top to bottom)
  border: 6px solid black;
}
.container {
  display: flex;
  flex-direction: column-reverse;  (main axis' direction is changed from bottom to top)
  border: 6px solid black;
}
4. The next property we are going to learn about is flex-direction. The flex-direction establishes the main axis which in turn besides how the flex-items are placed inside the Flex container. By default, the main axis flows from left to right which is the reason we see the items placed from left to right. In our example, by changing the value of the flex-direction property we can change how the items are placed. So let's take a look at an example. Let's go back to our CSS file and to the Flex container we are going to add the flex-direction property that the flex-direction can accept one of four values. The first value is row which is the default value. So if I add this property of flex-direction and set it to row. It wouldn't make a difference if I refresh, you can see that there is no difference. So the flex-direction of row sets the main axis from left to right. The next value is row-reverse and you guess that it sets the main axis direction from right to left which results in the flex-items being placed from the right to the left. So the value is row-reversed and if I refresh the browser, you can see that the items are now placed in the reverse order. Item-1 is placed to the right. The third value is column when you set flex-direction to column, the main axis flows from top to bottom. So the items are now stacked on top of each other. So go back to the browser and refresh and you can see that item-1 is at the top item-9 is at the bottom. The items are stacked up and flow from top to bottom and finally we also have column-reverse which stacks the items in the reverse order. So set the property to column-reverse and if I refresh, you can see that item-9 is at the top and item-1 is at the bottom. The items flow from bottom to top. So the flex-direction sets the direction of the main axis. Thereby, controlling how the items are placed in a container. Possible values is row which sets the main axis from left to right. Row-reverse is for right to left. Column for top to bottom column-reverse is for bottom to top.
*/

/*
flex-wrap-> nowrap(default), wrap, wrap-reverse
// control the wrapping of flex items within the container
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;  (default)
  border: 6px solid black;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 6px solid black;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  border: 6px solid black;
}
// for column
.container {
  display: flex;
  height: 400px;
  flex-direction: column;
  flex-wrap: nowrap;      (default)
  border: 6px solid black;
}
.container {
  display: flex;
  height: 400px;
  flex-direction: column;
  flex-wrap: wrap;
  border: 6px solid black;
}
.container {
  display: flex;
  height: 400px;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  border: 6px solid black;
}
5. Another great property on the container is the flex-wrap property. By default all the flex items in a container will try to fit into a single line. If there is not enough space in the items simply overflow. So if I reduce the browser width, you can see that the items begin to shrink and then are no longer in view. You can change this behavior using the flex-wrap property. Let's take a look. Can go back to the CSS file and to the container class? I'm going to add a new property which is the flex-wrap property. Now keep in mind, I haven't removed the display flex property on the container and I never will do so throughout the series. Now flex-wrap property can accept three possible values. The first one is nowrap. This is the default value if I refresh the browser, you can see that there is no change. If you want the items to wrap within the container, then we set a value of wrap. Now if I refresh the browser and reduce the browser width, you can see that the items have wrapped in the container. The wrapping takes place as and when needed. If there is not enough space for just one item item-9, for example, you can see that only item-9 moves into the next row. Reduce the size further, item-8 moves to the next row and so on and the final possible value is wrap-reverse. What wrap-reverse does is instead of items falling into the row below. It climbs into the row above. Let me show you that in the browser, go back refresh and if I reduce the browser width, you can see that item-9 instead of moving to the row below moves to the row above. Do not get confused that wrap-reverse wraps in the reverse order of the items. So item-1 does not move to the next row. If there is no sufficient space, wrapping always occurs from the last item. Wrap-reverse just pushes the last item above instead of below. Now similar to horizontal wrapping, vertical wrapping is also possible and for that we need to change the flex-direction to column and add a height to the Flex container. So let's remove this for now and add a flex-direction of column and set a height of 400px. Now if you observe very closely, the border ends at item 7 and the rest of the items are overflowing the container. If I add flex-wrap and set it to a value of wrap, you can see that the items are now wrapped within the container. Item-1 to item-6 is in one column and then the rest of the items have to move on to the next column. So a column is created to the right and items are placed in that column. And if I change the value to wrap-reverse the items are placed in a new column to the left of the existing column. That's pretty much the flex-wrap property. So the flex-wrap property is used to control the wrapping of Flex items within the container. The possible values are nowrap which is default, wrap which wraps the content into the next row or next column and wrap -reverse which wraps the content into the previous row or previous column.
*/

/*
flex-flow-> <flex-direction> <flex-wrap>
// flex-flow is the shorthand for flex-direction and flex-wrap
.container {
  display: flex;
  // flex-direction: row;
  // flex-wrap: wrap-reverse;
  flex-flow: row-reverse wrap;
  border: 6px solid black;
}
.container {
  display: flex;
  height: 400px;
  // flex-direction: column;
  // flex-wrap: wrap-reverse;
  flex-flow: column-reverse wrap-reverse;
  border: 6px solid black;
}
6. The next property is flex-flow which is pretty straightforward. It is a shorthand for flex-direction and flex-wrap. By default, the flex-flow property is set to row and nowrap which is the default of the individual properties. So I can add single flex-flow property now. The first value is the flex-direction and the second value is the flex-wrap. You can type any combination of the possible values and the layout will adjust accordingly. Let's go with flex-flow set to row-reverse and wrap. If I refresh a browser. Now you can see that row-reverse has applied. So item-1 is to the right and item-9 is to the left. And if I start reducing the browser width, the items start to wrap. Item-9 moves on to the next line. Item-8, item-7 and so on. Similarly, let's try column-reverse and wrap-reverse. Let me also quickly set a height to the container. And if I refresh the browser, you can see how that is laid out in the browser. Item-1 is at the bottom. It's a column-reverse and then wrap-reverse. So the items are wrapped to the previous column and that's it about flex flow. So the flex-flow property is the shorthand for flex-direction and flex-wrap. The first value is the flex-direction and the second value is the flex-wrap. All possible combinations of the two properties work just fine.
*/

/*
justify-content->flex-start, center, flex-end, space-between, space-around, space-evenly
// Align items and distribute any extra spacing in the parent container. The alignment is always along the main axis.
.container {
  border: 6px solid black;
  display: flex;
  justify-content: flex-start;
}
.container {
  border: 6px solid black;
  display: flex;
  justify-content: flex-end;
}
.container {
  border: 6px solid black;
  display: flex;
  justify-content: center;
}
.container {
  border: 6px solid black;
  display: flex;
  justify-content: space-between;
}
.container {
  border: 6px solid black;
  display: flex;
  justify-content: space-around;
}
.container {
  border: 6px solid black;
  display: flex;
  justify-content: space-evenly;
}
.container {
  border: 6px solid black;
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: space-start;
}
.container {
  border: 6px solid black;
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: space-end;
}
.container {
  border: 6px solid black;
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: center;
}
7. Now let's take a look at the alignment properties provided by flexbox on the Flex container. Starting off with justify-content and to see the alignment more clearly. I have reduced the number of items from nine to five right now. Justify-content defines the alignment along the main axis. Let's understand with the UI how the different values work. By default, justify-content is set to the value flex-start which places the Flex items at the beginning of the main axis which is also known as main start. So if I refresh the browser, you can see that there is no change. The main axis flows from left to right. So the flex-start is at the very left and justify-content set to flex-start will align the items to the left. The second possible value is flex-end. This causes the Flex items to be placed at the end of the main axis. So if I refresh, you can see that the items are pushed to the right which is the end of the main axis. So you can see that the main axis flows from left to right. By default, main-start is at the very left, main-end is at the very right. If you set justify-content to flex-start, they are aligned at main-start. If you set justify-content to flex-end, they are aligned at main-end which is what we see in the browser. Now it is also possible to align the content at the center of the main axis and the value is justify-content set to center. Refresh the page and you can see the content is now placed at the center of the main axis. So these are some of the properties you would expect for alignment- left align, right align and center align. However, flexbox also provides additional values that can control how the extra space has to be distributed. So we have a value of space-between. Now if I refresh the browser, you can see that the extra space that was left out is evenly split and added in between the Flex items. Sometimes, you might also want the space before the first item and after the last item. For such a scenario, the value is space-around. Refresh the browser and you can see that there is now space at the beginning and at the end and the space is equal to half of the space between the Flex items. For example, if the space in between the items is 20px. Space at the start and the end would be 10px. However if you want the same space even at the start and end of the items, the value you are looking for is space-evenly. Refresh the browser and you can see that the extra space is equally distributed in the container. (20px at the beginning and 20px at the end). And what you have to keep in mind is the justify-content property aligns items based on the main axis. So if we set the flex-direction to column, justify-content deals with vertical alignment. So back in the CSS in the container class. Let me change flex-direction to column and set a height of 800px to add extra space within the container and set justify-content to flex-start, you can see all the items are pulled to the top. And if the value is flex-end, refresh and all the items are pulled to the bottom. Set the value to center, refresh and you have vertically centered. Content something that was a real struggle before. Now space-between, space-around and space-evenly behave the same way. I'm going to let you try them out. So the justify-content property is used to align items and distribute any extra spacing in the parent container. The alignment is always along the main axis. The possible values are flex-start, flex-end, center, space-between, space-around and space-evenly.
*/

/*
Align-items-> flex-start, flex-end, center, baseline, stretch(default)
// Align items along the cross axis.
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  align-items: stretch;  (default)
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  align-items: flex-start;  (default)
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  align-items: flex-start;
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  align-items: flex-end;
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  align-items: center;
}
// styles.css
// to learn the align-items: baseline, we have to style three flex-items. It works to line text of the items.
.flex-1 {
  background-color: #b4bf35;
  padding-bottom: 3rem;
}
.flex-2 {
  background-color: #b95f21;
  padding-bottom: 5rem;
}
.flex-3 {
  background-color: #1c4c56;
  font-size: 3rem;
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  align-items: center;
}
8. The next alignment property is the align-items properly. Align-items defines the default behavior for how flex items are laid out along the cross axis of the container which means to say it works like justify-content but in the perpendicular direction. Again, let's understand with the UI how the different values work. Now, to see the changes, we need a height on the container. So, let's set height to 800px. Now, by default, the value of align-items is stretch that means the items stretch the entire length of the cross axis. So if I go back to the browser and refresh, you can see that the items stretch all the way from the top to the bottom from cross-start to cross-end and if I set the same property value. So align-items set to stretch, refresh the browser you can see that there is no change. So stretch is the default value. The second value we can specify is a flex-start(cross-start). So set flex-start, refresh and you can see that all the items are pushed to the cross-start which is the starting point of the cross axis. Remember the cross axis flows from the top to the bottom. Now you can see that even though the container is 800px in height, the items do not stretch and are aligned with the cross-start of the line. And similar to flex-start, we also have the flex-end and this value as you might have already guessed pushes the items to the end of the cross axis. So all are the way to the bottom. The 4th possible value is center which centers the content along the cross axis. So align-items is set to center, refresh you can see that the content is now centered along the cross axis. And the last value I want to discuss is baseline and when there is a word Sphinx, for example, the baseline is the line upon which most letters sit. So if you ever want the text inside the items to line up, go with baseline. Let's quickly take a look at an example. I'm gonna go back to the CSS file and I'm going to slightly modify the CSS for the first three items. For item-1 a padding-bottom of 3rem, for item-2 a padding-bottom of 5rem and for item-3 a font-size of 3rem. Now I have set the align-items property to baseline value and if I refresh the browser, you can see that the text inside each item is aligned the item itself is positioned based on where the text will sit(all items text is on one line straight). So that's how baseline works. Now, we can also flip the axis by setting a flex-direction to column and test how the alignment works. I'm going to leave that as an exercise for you all to try out. So align-items property is used to align items along the cross axis of the container. The possible values are flex-start, flex-end, center, baseline and stretch which is the default.
*/

/*

.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  flex-wrap: wrap;
  align-content: stretch;  (default)
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  flex-wrap: wrap;
  align-content: flex-start;
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  flex-wrap: wrap;
  align-content: flex-end;  
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  flex-wrap: wrap;
  align-content: center;  
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  flex-wrap: wrap;
  align-content: space-between;  
}
.container {
  border: 6px solid black;
  display: flex;
  height: 800px;
  flex-wrap: wrap;
  align-content: space-around;  
}
9. The last property that can be applied on the Flex container is the align-content property. The align-content property aligns lines of content along the cross axis. This is sort of a mix of justify content and align items. It distributes additional space but along the cross axis and a very important condition is that multiple lines or multiple rows must exist within the container. if not there is no effect. So let's understand the different possible values with the UI. Now, as you can see, I have all the nine items back in the container and now I'm going to go back to the CSS file and first make sure to have a height on the container and also enable wrapping. So I'm going to set height to 800px and set flex-wrap to wrap. Wrapping is required to force our content into at least two lines. Let's go back to the browser and refresh and if I reduce the width, you can see that the content wraps into two lines. The align-content property is used to align these lines of content within the container. The default value is stretch. You can see both the lines stretch to fill the available space. So, if I add the align-content property and set the value to stretch and refresh the browser, you can see that there is no change. So stretch is the default value. The second possible value is flex-start. So flex-start pulls the lines to the beginning of the cross axis. So if I refresh, you can see that the cross axis runs from top to the bottom. So the content of lines is pushed to the very top flex-start. So the start of cross axis similarly, we also have flex-end which pushes the content to the end of the cross axis. So refresh, you can see that the items are towards the end of the cross axis. The content is at the bottom. Now you can also center the content by specifying a value of center. Refresh and you can see that the content is now centered. The fourth value is space-between. Now this takes all the extra space and puts it in between the lines. Refresh and you can see all the space is in between the two lines. And finally we also have a space-around which distributes the space around the lines. So if I refresh, you can see that the center portion has twice the space as the edges. So if the space in between is a hundred pixels, the space at the edges is fifty pixels each. So the align-content property is used to align lines of content along the cross axis and distribute any extra spacing in the parent container. The possible values are flex-start, flex-end, center, space-between, space-around and stretch which is the default value.
*/



// flex items (child of flex container) properties
// flex items-> order, flex-grow, flex-shrink, flex-basis, flex, align-self.
/*
order-> integer number(1,2,3...)
// controls the order of items in the flex container.
.item-1 {
  background-color: #b4bf35;
}
.item-2 {
  background-color: #b95f21;
}
.item-3 {
  background-color: #1c4c56;
  order: 1;
}
.item-7 {
  background-color: #b95f21;
  order: 2;
}.item-9 {
  background-color: #aad041;
  order: 1;
}
1. flex items in a container are laid out in the order in which they appear in the source code. This order can be changed using the order property. In our example, we have nine items and you can see they are laid out item-1 through item-9 which is the order that they appear in the code. Let's mix up the order. So I'm going to go back to the CSS file and over here for item-3, I'm going to add an order of 1. Now, if I refresh the browser, you can see that item-3 is pushed all the way to the end and that is because all items by default have an order of zero. So order one is greater than the order of all other items and hence appears at the very end. Now if I change the order of item-7. Let's say to two ,you can see that item-7 is pushed to the very end. So order zero items come first. Then order one and then order two. If you specify the same order number for more than one item. Items are laid out in the order in which they appear in the source code. for example if I specify an order 1 for item-9, you can see that both item 3 and item 9 have the same order. But in the HTML, item-3 appears before item-9 and that is how the items are laid out in the browser. Items with the lowest order and two items with the highest order. So the order property accepts an integer value and is used to control the order of items in the Flex container elements. With the same order value are laid out in the order in which they appear in the source code(e.g in HTML).
*/

/*
flex-grow-> 0 (default value - items don't grow), 1 (flex items grow evenly e.g. extra space is divided and taken up equally)
// Dictates what amount of the available space inside the flex container the flex items should take up. Relative to the other items in the container.

.item-5 {
  background-color: #6b0803;
  flex-grow: 0; (no change will be done)
}
.item-5 {
  background-color: #6b0803;
  flex-grow: 1; (change will be done and extra space will be taken)
}
.item-6 {
  background-color: #1c4c56;
  flex-grow: 1; (extra space is taken up by item-5 and item-6 equally)
}
.item-6 {
  background-color: #1c4c56;
  flex-grow: 3; (extra space is taken up by item-6 three times more than item-5)
}
.flex-item {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  flex-grow: 1; (all items will take the extra space equally)
}
2. The next property that can be applied on a flex item is the flex-grow property. This property specifies what amount of space inside the Flex container the item or items should take up if necessary. And the flex-grow property is always relative to the size of the other items in the Flex container. Let's understand this property with the UI. By default, you can see that the flex items only take up space that is required to fit the content. So there is a lot of extra space within the container. Sometimes though you don't want the additional whitespace. Instead, you want the flex items to grow to take up the remaining space. By default, all flex items have a flex-grow value of zero which is why they don't take up the available extra space. Let's take that for one of the items and see what happens so. I'm going to go back to visual studio code and for item-5, I will set flex-grow to zero to begin with. Now if I save this and refresh the browser, you can see that there is no change. So zero is the default value. When I change the value to one, refresh the browser, you can see the change. item-5 now grows to take up all the remaining space in the container. Let's add the property to item-6 as well. So item-6 takes flex-grow one. Now if you take a look at the browser, the additional space has been evenly(equally) distributed between the two flex items item-5 and item-6. So if there was a 100px extra space available, item-5 would grow by an additional 50px and item-6 again would grow by an additional 50px. Now, let me change the value of item-6 to three from 1. What do you think is going to happen? Now when I refresh, you can see that both item-5 and item-6 grow but item-6 takes up the extra space three times as much as item-5. Remember flex-grow property is relative. If item-5 grows by 25px, item-6 has to be three times that value and hence grows by 75px. And you can specify decimal values as well. And that works completely fine. However, do not specify negative values. Now, you might want all the items to grow to take up the extra space evenly. For that we simply add flex-grow and set it to 1 for all the flex items. So I'm gonna go back to visual studio code. Flex-grow on item-5 and flex-grow on item-6 and instead on the flex-item class which is applied to every individual item. I'm going to set flex-grow to 1. Now if I refresh, you can see that all items grow evenly to take up the leftover space. There is no more additional space at the end of the container. So, the flex-grow property dictates what amount of the available space inside the Flex container the items should take up. flex-grow property is also relative to the other items in the container. By default, the value is 0 which dictates the items should not grow. setting a flex-grow value of 1 on all the Flex items will cause the flex items to grow evenly when there is additional space in the container.
*/


/*
flex-shrink-> 1 (default value and cause to shrink), 0 (no shrink)
// Dictates the shrink factor of the items when the default size of flex items is larger than the flex container. Relative to the other items in the container.

.flex-item {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  flex-shrink: 1; (default value, all items will shrink to the certain point)
}
.flex-item {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  flex-shrink: 0; (no shrink will happen)
}
.flex-item {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  width: 8rem;   (for only five items)
}
.item-2 {
  background-color: #b95f21;
  flex-shrink: 4;
}
3. On the other side of flex-grow, we have the flex-shrink property. As you might have already guessed flex-shrink defines the ability for a flex item to shrink if necessary. And unlike a flex-grow the default value for flex-shrink is one(1). However, the flex-shrink factor again is still relative to the other items in the container. So let's understand with the UI. Now, the first point to make note of is that flex-shrink is set to a value of 1 by default for every single flex item. And that is why if I try to reduce the width of the parent container, the flex-items shrink to fit inside the container. In case you miss that let me repeat it, you can see the flex items width and if I decrease the screen size the width of the flex items also decrease, they are shrinking now. The shrinking is possible only up to a certain point after which the items simply overflow. So if I reduce the width further, you can see that item-9 is not visible anymore. Now, let's say, you don't want this shrinking happening on the flex items. For that, simply set the flex-shrink value to zero. So go back to visual studio code and on the flex item class which is applied to every flex item. By the way set flex-shrink to a value of zero. Now if I go back to the browser, refresh this. You're going to see that there is no more shrinking and the items overflow right away. So you can see that item-9 is not visible anymore. There was no shrinking happening. So by setting flex-shrink to a value of zero, you can prevent the shrinking from happening. Of course, it is possible to control the shrinking for individual items as well. So let me go back to visual studio code. I'm going to comment this and add a flex-shrink. Item-2 gets value 4 and what this specifies is item-2 is going to shrink four times as much as the other items. Remember this is a relative factor. So if all other items shrink by 25px, item-2 which has a flex shrink value of four is going to shrink four times as much. So 4 multiply by 25, a hundred pixels. So, let's see this in action and just for demonstration purpose for flex-shrink. I'm going to add a width property to flex item class to make all the items look larger. So width is going to be let's say 8rem and I'm going to comment out some of the items. So now if I refresh, we have items-1 through item-5. And you can see that all the items occupy the same space. if I start decreasing the width though you can see that item-2 decreases more than the other items and this is purely because flex-shrink is set to a value of four on item-2. So it is going to shrink in size four times faster than the other flex items. Now similarly you can set flex-shrink to a value of two on item-3 and test how that turns out to be. From this example, you can see that flex-grow and flex-shrink are helpful when you want the important content on your page to grow or the less important trivial content to shrink based on the screen size. So the flex-shrink property dictates the shrink factor of the flex items when the default size of the flex items is larger than the flex content and it is always relative to other items in the container. By default the value is 1 which dictates the items should shrink to a certain extent if necessary.
*/

/*
flex-basis-> auto (default value), px, rem, em, percentages.
// Set the initial size of a flex item.

.item-1 {
  background-color: #b4bf35;
  flex-basis: auto;  (default value. No change occurs.)
}
.item-1 {
  background-color: #b4bf35;
  flex-basis: 200px;
}
.item-1 {
  background-color: #b4bf35;
  flex-basis: 400px;
}

4. The next property is the flex-basis property. The flex-basis property specifies the initial size of a flex item before the extra space in the container is distributed. This is used in place of the width property in Flex layouts. So, in the previous video I did use width but never do that. Always use flex-basis to set the initial width of a flex-item. I had to use width because we were not familiar with flex-basis yet. All right, so the flex-basis property can accept values in percentages. pixels ems, rems or even keywords like auto. Let's, understand better with the UI. By default, flex-basis has a value of auto which sets the initial width based on the items content. In our case, you can see that the items width is dependent on the text inside. So if I go back to visual studio code, and in the HTML if I change the text on item-1(writing something longer). If I refresh the browser, you can see that the item now has a larger initial width. Now, let's go back to the CSS file and I'm going to add the flex-basis property on item-1 and set it to a value of auto. So flex-basis Auto, if I refresh, you should not see any difference. The default value is Auto. For the flex-basis property, now flex-basis also accepts a number, for example, 200px. So if I change Auto to 200px and refresh the browser, you can see that the initial size is now 200px. Change it to 400px, refresh and you are going to see 400px. And what you have to make note of here is that flex-grow and flex-shrink apply on top of flex-basis. So if flex-grow is set to one the extra space is added to this 400px. So it might be, for example, 450px. After growing 50px was the additional width that it grew. Flexbox doesn't try to decrease its growth just because it is larger than other elements to begin with. Flex-basis and flex-grow are independent of each other and the same goes with flex-shrink as well just because an item had a smaller size to begin with. Flex-shrink doesn't excuse that item from shrinking. It still applies whatever the factor is necessary to decrease that particular item. All right, so the flex-basis property is used to set the initial size of a flex item. You can specify values in pixels, percentages or relative units. By default the value is Auto which decides the items width based on the items content.
*/

/*
flex-> shorthand for flex-grow, flex-shrink and flex-basis.
// flex: <flex-grow><flex-shrink><flex-basis>
.item {
  flex-grow: 2;
  flex-shrink: 5;
  flex-basis: 200px;
}
OR,
.item {
  flex: 2 5 200px;
}
By default,
.item {
  flex: 0 1 auto;
}

// There is the shorthand of flex property....
// flex: auto;           (flex-grow: 1; flex-shrink: 1; flex-basis: auto)

// Must learn...
1. If there is value without unit, it means flex-grow.
for example-> flex: 2;

2. If there is value with unit, it means flex-basis.
for example-> flex: 10em / 30px / 10%;

3. If there are two values, one is unitless and the other is with unit, it means flex-grow and flex-basis
for example-> flex: 1 30px;

4. If there are two values and they are unitless, it means flex-grow and flex-shrink.
for example-> flex: 2 2;

5. If there are three values, it means flex-grow, flex-shrink and flex-basis.
for example-> flex: 2 2 10%;

5. The next property applicable to a flex item is the flex property. This is a shorthand for flex-grow, flex-shrink and flex-basis. Let me quickly explain how it works. Though for a flex item we can set flex-grow, flex-shrink and flex basis, we can specify these properties individually. The recommended way is to use the flex property. The flex property accepts three values separated by a space. The first is flex-grow. Second is flex-shrink and finally flex-basis. You can see that it is much simpler and easier as well. By default flex property has a value of zero, one, auto. Zero is for flex-grow which implies the items will not grow to fit the container. One is for flex-shrink which implies the items will shrink when necessary. And auto is for flex-basis which implies the width of the items depends on the content. The flex property can be specified using either 1 2 or 3 values. With the 1 value syntax the value must be either a unitless number in which case it is interpreted as flex-grow or a valid value for width in which case it is interpreted as flex-basis or it could be one of the keyword values none, initial or auto. if these 3 keywords have a set of predefined values for flex-grow, flex-shrink and flex-basis. Keep that in mind, now with the 2 value syntax the first value must be a unitless number and it is interpreted as a flex-grow and the second value must be one of either a unitless number in which case it is interpreted as flex-shrink or a valid value for width in which case it is interpreted as flex-basis. With the three value syntax the first value must be a unitless number and that would be flex-grow, the second value again must be a unitless number in which case it is flex-shrink, and then the third value must be a valid value forward and this interpreted as flex-basis. All right, then try experimenting with all these scenarios to get a good understanding of how the Flex property works.
*/

/*
align-self-> auto(default), flex-start, flex-end, center and stretch
// Align the items individually. Overrides the align-items value of the flex container.

.container {
  border: 6px solid black;
  display: flex;
  height: 400px;
}

.item-1 {
  background-color: #b4bf35;
  align-self: flex-start;
}
.item-2 {
  background-color: #b95f21;
  align-self: flex-end;
}
.item-3 {
  background-color: #1c4c56;
  align-self: center;
}
.item-4 {
  background-color: #cfb276;
  align-self: stretch;
}
.container {
  border: 6px solid black;
  display: flex;
  height: 400px;
  align-item: flex-end;
}

6. The last property is the align-self property which is used to control alignment of individual flex items. The values are pretty much the same that is applicable for the align- items property on the Flex container. So let's take a look at them one by one. Now to help us with the demo, I'm going to set a height on the container. So this height is going to be 400px. So now if I refresh the browser, you can see that the container has a height of 400px and the items stretch from cross-start to cross-end. The first possible value for align-self is flex-start. So for item-1, I'm going to set align-self to flex-start. Now if I refresh, you can see that item-1 is pulled to the top which is where the cross axis starts. The second value is flex-end which aligns the item with the end of the cross axis. So for item-2, I'm going to set align-self to flex-end and if I refresh, item-2 is pulled to the bottom. This is where we have cross-end. The third possible value is center. So for item-3, I'm going to set align-self to center. If I refresh, you can see that item-3 is now centered. The fourth value is stretch. So for item-4, I'm going to set align-self to stretch. Now this stretches the item from cross-start to cross-end. If I refresh the browser, you can see that item-4 is stretched. But hang on, so our item-5 through item-9, now you might think okay. Then stretch is the default value for align-self property but that is not true. The default value for align-self is Auto which implies align-self must be computed from the align-items property of the parent Flex container. Item-5 through item-9 are stretched because the container has align-items to stretch which is the default value. Starting to get a bit confusing right, so let me go over this slowly. if I go back to visual studio code, you can see that the Flex container has no align items property set. So what is the default value it is stretch. So container has align-items set to stretch by default. Now let's go to flex item-5 to item-9, thet have align-self property. And what is the default value of align-self is Auto and what does Auto specify Auto specifies that the items should take the value for align-self as the value of parents align-items property. So item-5 to item-9 takes the value of stretch from the parent container. Now if I do set align-items property on the parent container. I'm gonna set it to flex-end, refresh the browser, you can see that item-5 through item-9 will inherit this value and will be pushed to the end of the cross axis. So very important to keep the default values in mind for align-self. The default value is not stretch it is Auto which means inherit the value of align-items from the parent container. Align-items on the parent container has a default value of stretch but align-self on the individual child items has a default value of auto. And if align-self is specified, it always overrides the align-items value. So the align-self property is used to align the items individually. It accepts values like Auto, flex-start, flex-end, center and stretch. If specified it will always override the align-items value of the Flex container(parent).
*/

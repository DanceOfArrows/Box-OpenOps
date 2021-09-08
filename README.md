Instructions:

1. Start with a blank create-react-app
2. We want to fill the entire browser window with a 2 dimensional matrix of <Box /> components
3. Each <Box /> component renders a square, with a random background color
4. The dimension of the square (for all <Box /> components) is fixed, you can set it as a constant
5. <Box /> component has an `onClick` handler
6. When clicked, the <Box /> changes it's own background color to a random color (React should re-render automatically)
7. The click handler also changes the background color of 1 of its neighbors <Box /> (check for matrix boundary and make sure the selected neighbor is visible)
8. Try to optimize the rendering so that the minimum number of <Box /> components are rendered on click of any <Box />

Notes:
Point 2: How you store a matrix is up to you and you can be creative about the data structure.

Points 6,7: When any Box is clicked only its and its neighbors colors should change, other Boxes should stay as they were.

Point 8: Depending on how you print the matrix of Boxes, React will want to re-render the whole array on each click (since you change colors of a few Boxes within the matrix). You should try to limit re-rendering only the Boxes that actually have color change.

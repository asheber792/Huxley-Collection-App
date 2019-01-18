# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Functional Components | Complete
|Day 1| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 2| Pseudocode / actual code | Complete
|Day 3| Initial Clickable Model  | Incomplete
|Day 3| MVP | Incomplete
|Day 4| Present | Incomplete


## Project Description

A Web App displaying the works of Aldous Huxley, providing book covers, titles, descriptions, etc.

## Wireframes

https://res.cloudinary.com/dj10zwlqs/image/upload/v1547570130/Project2/AA_P2_Wireframe.jpg

## Priority Matrix

https://res.cloudinary.com/dj10zwlqs/image/upload/v1547570137/Project2/AA_Priority_Matrix.jpg

#### MVP 

- Find and use external api's for quotes and list of books
- render landing page with a quote appearing on screen and changing at random every ? seconds
- render collected works page displaying titles and book covers 
- set up onclick function to render a page displaying title, cover, description, etc. 
- styles 

#### PostMVP 
- add multiple pages to collected works 
- add more than one page worth of api quote data 
- add freely available ebooks of available books
- add reviews for books 

## React Architectural Design

https://res.cloudinary.com/dj10zwlqs/image/upload/v1547570147/Project2/AA_P2_Component_Hierarchy.jpg

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Home page | This will render random Aldous Huxley quotes | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs |
| Total | H | 6hrs| 5hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| GoodReads API | Used to get book covers and info | 
| GoodQuotes API | Used to get Huxley Quotes | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

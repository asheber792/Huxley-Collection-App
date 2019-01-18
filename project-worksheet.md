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
|Day 3| Initial Clickable Model  | Complete
|Day 3| MVP | Complete
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

| Component | Description | 
| --- | :---: |  
| Home page | This will render random Aldous Huxley quotes | 
| Works | This will render titles and book covers of Huxley's works | 
| BookInfo | This will render details about a specific (clicked cover) huxley book | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Working with API | H | 3hrs| 6hrs |
| Quotes display at interval at Home | H | 2hrs| 2hrs |
| Display titles and book covers | H | 4hrs| 6hrs |
| Display Book Details onClick of cover | H | 4hrs| 5hrs |
| Styling | M | 3 hrs| 5hrs |
| Post MVP | L | 15 hrs| 0hrs |
| Total | H | 16hrs| 24hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| fetchBooks | pulls data, as an XML, from an api (GoodReads) and converts it to JSON | 

## Additional Libraries
 
| Library | What it Does | 
| --- | :---: |  
| GoodReads API | Used to get book covers and info | https://www.goodreads.com/api/
| GoodQuotes API | Used to get Huxley Quotes | https://goodquotesapi.herokuapp.com/#/

## Code Snippet 

Located in the render() of Works.js
```
if (this.state.redirect) {
      return(
        <Redirect 
          push to={{
            pathname:`/book-info/${this.state.id}`,
            state: { books: this.state.books }
          }} />
      )
    }
```
snippet uses Redirect and passes a book ID through URL parameters and state to the BookInfo component

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions

API Errors: specifically recieving data as an XML file 
    Solution: installing npm package xml2js to convert XML to a readable javascript format

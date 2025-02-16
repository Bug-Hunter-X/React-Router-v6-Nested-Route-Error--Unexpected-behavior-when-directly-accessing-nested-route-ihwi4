# React Router v6 Nested Route Error

This repository demonstrates a subtle bug in React Router v6 related to nested routes.  The issue arises when navigating directly to a nested route without first visiting its parent route.  The provided code shows the bug and the solution.

## Bug

The bug is in `App.js`. When you directly navigate to `/about/nested`,  it throws an error, instead of rendering the `NestedAbout` component. This only happens when navigating directly to the nested route. Navigating to `/about` then to `/about/nested` works correctly.

## Solution

The solution is provided in `AppSolution.js`.  It uses the `useLocation` hook to check if the user has navigated to `/about/nested` directly. If so it redirects them to `/about`. This solves the issue without affecting the expected behavior when visiting the nested route from the parent route. 
Sure! Here are 100 React.js coding challenge questions that cover various aspects like feature implementation, basic app creation, form handling, data fetching, and rendering:

Create a Basic React Component

javascript
Copy code
function Greeting() {
    // Implement a simple component that returns a "Hello, World!" message.
    return <div>Hello, World!</div>;
}
Create a Counter Component

javascript
Copy code
function Counter() {
    // Implement a counter with increment and decrement buttons.
    return <div></div>;
}
Create a Form Component

javascript
Copy code
function MyForm() {
    // Implement a form with an input field and a submit button.
    return <form></form>;
}
Handle Form Submission

javascript
Copy code
function MyForm() {
    // Implement a form with an input field that alerts the input value on submission.
    return <form></form>;
}
Fetch Data from an API

javascript
Copy code
function FetchData() {
    // Implement a component that fetches data from an API and displays it.
    return <div></div>;
}
Render a List of Items

javascript
Copy code
function ItemList() {
    // Implement a component that renders a list of items from an array.
    return <ul></ul>;
}
Conditional Rendering

javascript
Copy code
function ConditionalComponent({ isLoggedIn }) {
    // Implement a component that renders different content based on the `isLoggedIn` prop.
    return <div></div>;
}
Implement a Toggle Button

javascript
Copy code
function ToggleButton() {
    // Implement a button that toggles between "ON" and "OFF" states.
    return <button></button>;
}
Create a Simple Todo List

javascript
Copy code
function TodoList() {
    // Implement a basic todo list with the ability to add and remove items.
    return <div></div>;
}
Handle Input Change Event

javascript
Copy code
function MyForm() {
    // Implement an input field that updates the state on change.
    return <input />;
}
Update State Based on Previous State

javascript
Copy code
function Counter() {
    // Implement a counter that increments and decrements based on the previous state.
    return <div></div>;
}
Use Props to Pass Data

javascript
Copy code
function DisplayMessage({ message }) {
    // Implement a component that displays a message passed via props.
    return <div></div>;
}
Handle Form Validation

javascript
Copy code
function MyForm() {
    // Implement a form with validation for the input field.
    return <form></form>;
}
Use useEffect Hook for Data Fetching

javascript
Copy code
function FetchData() {
    // Implement a component that uses the useEffect hook to fetch data from an API.
    return <div></div>;
}
Implement a Search Bar

javascript
Copy code
function SearchBar() {
    // Implement a search bar that filters a list of items based on input.
    return <input />;
}
Create a Modal Component

javascript
Copy code
function Modal({ isOpen, onClose }) {
    // Implement a modal component that shows/hides based on the `isOpen` prop.
    return <div></div>;
}
Implement a Pagination Component

javascript
Copy code
function Pagination({ currentPage, totalPages, onPageChange }) {
    // Implement a pagination component with buttons to navigate between pages.
    return <div></div>;
}
Use Context API for State Management

javascript
Copy code
const MyContext = React.createContext();
function MyProvider({ children }) {
    // Implement a context provider with a value.
    return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}
Create a Form with Controlled Components

javascript
Copy code
function MyForm() {
    // Implement a form with controlled input components.
    return <form></form>;
}
Implement a Fetch Data Hook

javascript
Copy code
function useFetch(url) {
    // Implement a custom hook for fetching data from a URL.
    return { data: null, loading: true, error: null };
}
Use useMemo for Performance Optimization

javascript
Copy code
function ExpensiveComponent({ data }) {
    // Implement a component that uses useMemo to optimize performance.
    return <div></div>;
}
Create a Basic Tab Component

javascript
Copy code
function Tabs({ tabs }) {
    // Implement a tab component with multiple tab panels.
    return <div></div>;
}
Implement a Carousel Component

javascript
Copy code
function Carousel({ items }) {
    // Implement a carousel component to display a series of items.
    return <div></div>;
}
Use useCallback to Optimize Event Handlers

javascript
Copy code
function OptimizedComponent() {
    // Implement a component that uses useCallback to memoize event handlers.
    return <div></div>;
}
Create a Rating Component

javascript
Copy code
function Rating({ value }) {
    // Implement a rating component that displays stars based on the value.
    return <div></div>;
}
Handle Nested State Updates

javascript
Copy code
function NestedStateComponent() {
    // Implement a component that handles updates to nested state objects.
    return <div></div>;
}
Implement a Dark Mode Toggle

javascript
Copy code
function DarkModeToggle() {
    // Implement a component that toggles dark mode.
    return <button></button>;
}
Create a Responsive Navbar

javascript
Copy code
function Navbar() {
    // Implement a responsive navbar that collapses on smaller screens.
    return <nav></nav>;
}
Use React Router for Navigation

javascript
Copy code
function App() {
    // Implement routing using React Router to navigate between different pages.
    return <div></div>;
}
Create a Simple E-commerce Product List

javascript
Copy code
function ProductList({ products }) {
    // Implement a component that displays a list of products.
    return <div></div>;
}
Implement a Filter Component

javascript
Copy code
function Filter({ options, onFilterChange }) {
    // Implement a filter component that updates the list based on selected options.
    return <div></div>;
}
Create a User Profile Component

javascript
Copy code
function UserProfile({ user }) {
    // Implement a component that displays user profile information.
    return <div></div>;
}
Handle Multiple Form Inputs

javascript
Copy code
function MultiInputForm() {
    // Implement a form with multiple input fields and handle their values.
    return <form></form>;
}
Implement a Notification System

javascript
Copy code
function Notifications({ notifications }) {
    // Implement a component that displays a list of notifications.
    return <div></div>;
}
Create a Shopping Cart Component

javascript
Copy code
function ShoppingCart({ items }) {
    // Implement a component that displays items in a shopping cart.
    return <div></div>;
}
Use useRef to Access DOM Elements

javascript
Copy code
function FocusInput() {
    // Implement a component that uses useRef to focus an input element.
    return <input />;
}
Implement a Progress Bar

javascript
Copy code
function ProgressBar({ progress }) {
    // Implement a component that displays a progress bar based on the progress value.
    return <div></div>;
}
Create a Data Table Component

javascript
Copy code
function DataTable({ data }) {
    // Implement a component that displays data in a table format.
    return <table></table>;
}
Handle File Uploads

javascript
Copy code
function FileUpload() {
    // Implement a component that allows users to upload files.
    return <input type="file" />;
}
Create a Responsive Grid Layout

javascript
Copy code
function GridLayout({ items }) {
    // Implement a responsive grid layout to display items.
    return <div></div>;
}
Implement a Slider Component

javascript
Copy code
function Slider({ value, onChange }) {
    // Implement a slider component that updates its value based on user input.
    return <input type="range" />;
}
Use useReducer for State Management

javascript
Copy code
function Counter() {
    // Implement a counter component that uses useReducer for state management.
    return <div></div>;
}
Create a Signup Form with Validation

javascript
Copy code
function SignupForm() {
    // Implement a signup form with validation for user inputs.
    return <form></form>;
}
Implement a Logout Button

javascript
Copy code
function LogoutButton({ onLogout }) {
    // Implement a button that triggers a logout function.
    return <button></button>;
}
Create a User Dashboard

javascript
Copy code
function UserDashboard({ user }) {
    // Implement a component that displays a user dashboard with various statistics.
    return <div></div>;
}
Handle Debouncing with useEffect

javascript
Copy code
function SearchInput() {
    // Implement a search input with debouncing using useEffect.
    return <input />;
}
Create a Dynamic Form with Conditional Fields

javascript
Copy code
function DynamicForm({ type }) {
    // Implement a dynamic form that displays different fields based on the type.
    return <form></form>;
}
Implement a Rating System

javascript
Copy code
function StarRating({ rating, onRate }) {
    // Implement a star rating system where users can rate an item.
    return <div></div>;
}
Create a Simple Chat Application

javascript
Copy code
function ChatApp() {
    // Implement a simple chat application with message input and display.
    return <div></div>;
}
Use Context API for Theme Switching

javascript
Copy code
const ThemeContext = React.createContext();
function ThemeProvider({ children }) {
    // Implement a context provider for theme switching.
    return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
}
Implement a Date Picker Component

javascript
Copy code
function DatePicker({ selectedDate, onChange }) {
    // Implement a date picker component.
    return <input type="date" />;
}
Create a Basic Authentication Flow

javascript
Copy code
function AuthFlow() {
    // Implement a basic authentication flow with login and logout functionality.
    return <div></div>;
}
Handle API Errors Gracefully

javascript
Copy code
function FetchData() {
    // Implement error handling for data fetching from an API.
    return <div></div>;
}
Implement a Dynamic Table with Sorting

javascript
Copy code
function SortableTable({ data }) {
    // Implement a table that allows sorting by column.
    return <table></table>;
}
Create a User Profile Edit Form

javascript
Copy code
function EditProfileForm({ user, onSave }) {
    // Implement a form to edit user profile information.
    return <form></form>;
}
Implement Infinite Scrolling

javascript
Copy code
function InfiniteScroll({ fetchMoreData }) {
    // Implement infinite scrolling functionality.
    return <div></div>;
}
Create a Loading Spinner Component

javascript
Copy code
function LoadingSpinner() {
    // Implement a loading spinner component.
    return <div></div>;
}
Handle Form Input with useState

javascript
Copy code
function FormComponent() {
    // Implement a form with multiple inputs using useState.
    return <form></form>;
}
Create a Notification Toast Component

javascript
Copy code
function Toast({ message }) {
    // Implement a notification toast component.
    return <div></div>;
}
Implement a Tooltip Component

javascript
Copy code
function Tooltip({ text }) {
    // Implement a tooltip component that displays additional information on hover.
    return <div></div>;
}
Create a Simple Counter with useReducer

javascript
Copy code
function Counter() {
    // Implement a counter component using useReducer.
    return <div></div>;
}
Implement a Search Functionality with useState

javascript
Copy code
function SearchableList({ items }) {
    // Implement a search functionality to filter items based on user input.
    return <div></div>;
}
Create a Form with Multiple Steps

javascript
Copy code
function MultiStepForm() {
    // Implement a multi-step form with navigation between steps.
    return <form></form>;
}
Implement a Breadcrumb Navigation

javascript
Copy code
function Breadcrumbs({ path }) {
    // Implement a breadcrumb navigation component.
    return <div></div>;
}
Create a Responsive Card Component

javascript
Copy code
function Card({ title, content }) {
    // Implement a card component with responsive design.
    return <div></div>;
}
Handle Form Submission with Validation

javascript
Copy code
function ContactForm() {
    // Implement a contact form with validation on submission.
    return <form></form>;
}
Create a User List with Pagination

javascript
Copy code
function UserList({ users, currentPage, onPageChange }) {
    // Implement a user list with pagination controls.
    return <div></div>;
}
Implement a Modal Dialog with Form

javascript
Copy code
function ModalWithForm({ isOpen, onClose }) {
    // Implement a modal dialog that contains a form.
    return <div></div>;
}
Create a Data Fetching Component with useEffect

javascript
Copy code
function DataFetcher({ url }) {
    // Implement a component that fetches data from the given URL using useEffect.
    return <div></div>;
}
Implement a Dark Mode Toggle with Context API

javascript
Copy code
function DarkModeToggle() {
    // Implement a dark mode toggle that updates the theme context.
    return <button></button>;
}
Create a Dynamic Dropdown Menu

javascript
Copy code
function Dropdown({ options, onSelect }) {
    // Implement a dynamic dropdown menu with options.
    return <select></select>;
}
Implement a Tabbed Interface

javascript
Copy code
function TabbedInterface({ tabs }) {
    // Implement a tabbed interface with selectable tabs.
    return <div></div>;
}
Create a Basic Layout with Header and Footer

javascript
Copy code
function Layout({ children }) {
    // Implement a layout with a header and footer.
    return <div></div>;
}
Implement a Custom Hook for Form Handling

javascript
Copy code
function useForm(initialValues) {
    // Implement a custom hook to handle form state and validation.
    return { values: {}, handleChange: () => {}, handleSubmit: () => {} };
}
Create a User Profile Picture Upload

javascript
Copy code
function ProfilePictureUpload() {
    // Implement a component that allows users to upload a profile picture.
    return <input type="file" />;
}
Handle State Updates with useEffect

javascript
Copy code
function DataComponent() {
    // Implement a component that updates state based on useEffect.
    return <div></div>;
}
Create a Notification Bell with Count

javascript
Copy code
function NotificationBell({ count }) {
    // Implement a notification bell with a count of notifications.
    return <div></div>;
}
Implement a Carousel with Thumbnails

javascript
Copy code
function Carousel({ items }) {
    // Implement a carousel component with thumbnail navigation.
    return <div></div>;
}
Create a Basic CRUD App

javascript
Copy code
function CrudApp() {
    // Implement a basic CRUD application with create, read, update, and delete functionalities.
    return <div></div>;
}
Implement a Tag Input Component

javascript
Copy code
function TagInput() {
    // Implement a tag input component that allows adding and removing tags.
    return <input />;
}
Create a Weather Forecast Component

javascript
Copy code
function WeatherForecast({ forecast }) {
    // Implement a component that displays weather forecast data.
    return <div></div>;
}
Implement a Custom Select Component

javascript
Copy code
function CustomSelect({ options, onChange }) {
    // Implement a custom select component with options and change handler.
    return <select></select>;
}
Create a Basic User Dashboard

javascript
Copy code
function UserDashboard({ user }) {
    // Implement a basic user dashboard displaying user information and stats.
    return <div></div>;
}
Implement a Rating Component with Half-Stars

javascript
Copy code
function HalfStarRating({ rating }) {
    // Implement a rating component that supports half-star ratings.
    return <div></div>;
}
Create a Multi-Select Dropdown Component

javascript
Copy code
function MultiSelectDropdown({ options, onChange }) {
    // Implement a multi-select dropdown component.
    return <select multiple></select>;
}
Implement a Breadcrumb Navigation with Links

javascript
Copy code
function Breadcrumbs({ path }) {
    // Implement breadcrumb navigation with clickable links.
    return <div></div>;
}
Create a Filterable Data Table

javascript
Copy code
function FilterableTable({ data, filter }) {
    // Implement a data table with filtering functionality.
    return <table></table>;
}
Implement a Component with Dynamic Style

javascript
Copy code
function DynamicStyledComponent({ isActive }) {
    // Implement a component with dynamic styles based on a prop.
    return <div></div>;
}
Create a Basic Form with Error Handling

javascript
Copy code
function BasicForm() {
    // Implement a basic form with error handling and display of error messages.
    return <form></form>;
}
Implement a Data Visualization Component

javascript
Copy code
function DataVisualization({ data }) {
    // Implement a component that visualizes data using charts or graphs.
    return <div></div>;
}
Create a Review Form with Star Ratings

javascript
Copy code
function ReviewForm() {
    // Implement a review form that includes star ratings and comments.
    return <form></form>;
}
Implement a Simple Shopping Cart

javascript
Copy code
function ShoppingCart({ items }) {
    // Implement a basic shopping cart with item list and total price.
    return <div></div>;
}
Create a Basic Modal Component

javascript
Copy code
function Modal({ isOpen, onClose }) {
    // Implement a basic modal component with open and close functionality.
    return <div></div>;
}
Implement a Date Range Picker

javascript
Copy code
function DateRangePicker({ startDate, endDate, onChange }) {
    // Implement a date range picker component.
    return <div></div>;
}
Create a Basic Form with Controlled Components

javascript
Copy code
function ControlledForm() {
    // Implement a form with controlled components for input handling.
    return <form></form>;
}
Implement a Search Bar with Autocomplete

javascript
Copy code
function AutocompleteSearch() {
    // Implement a search bar with autocomplete suggestions.
    return <input />;
}
Create a Responsive Grid Layout

javascript
Copy code
function ResponsiveGrid({ items }) {
    // Implement a responsive grid layout for displaying items.
    return <div></div>;
}
Implement a Simple Modal with Hooks

javascript
Copy code
function SimpleModal() {
    // Implement a simple modal component using React hooks.
    return <div></div>;
}
Create a Page with Tabs and Content Switching

javascript
Copy code
function TabsPage() {
    // Implement a page with tabs that switch between different content sections.
    return <div></div>;
}
Implement a Multi-Step Form Wizard javascript function FormWizard() { // Implement a multi-step form wizard with navigation between steps. return <form></form>; }

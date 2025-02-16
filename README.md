# Eat'n'Split

A React application that helps you track and split expenses with friends. Keep track of who owes whom and settle bills easily.

## Features

- Add friends with custom names and avatars
- Track balances between you and your friends
- Split bills with specific friends
- Calculate individual expenses automatically
- Visual indicators for positive and negative balances
- Responsive design with a clean user interface

## Technologies Used

- React
- Tailwind CSS
- React Icons
- React Select
- Flowbite

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [your-repository-url]
```

2. Navigate to the project directory

```bash
cd eat-n-split
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

1. **Adding Friends**

   - Click the "Add friend" button
   - Enter friend's name
   - Optionally customize their avatar URL
   - Click "Add" to save

2. **Splitting Bills**

   - Select a friend from the sidebar
   - Click "Select" to open the split bill form
   - Enter the total bill amount
   - Enter your expense
   - Choose who is paying the bill
   - Click "Split Bill" to calculate and save

3. **Tracking Balances**
   - Green text indicates your friend owes you
   - Red text indicates you owe your friend
   - Gray text shows when you're even

## Styling

The application uses a combination of Tailwind CSS and custom CSS for styling. The color scheme is based on orange tones with:

- Light orange backgrounds for hover states
- Dark orange for buttons and interactive elements
- Responsive design for various screen sizes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

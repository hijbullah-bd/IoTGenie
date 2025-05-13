# IoTGenie

IoTGenie is a feature-rich, web-based e-commerce platform tailored for the Internet of Things (IoT) ecosystem. The platform is built using Django for the backend and React.js for the frontend.

## Features

### Customer Features
- Browse and search IoT products with category filters.
- View detailed product information and user reviews.
- Add items to cart and securely place orders.
- Track order status and purchase history.
- Submit product feedback and ratings.

### E-Commerce Functionalities
- Full cart system with add/remove/quantity control.
- Integration with payment gateways for secure checkout (planned).
- Order management for customers and vendors.

### Admin Features
- Admin login dashboard with authentication.
- Add, update, or delete IoT product listings.
- Manage stock and view total inventory.
- View and manage customer orders and feedback.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Django, Django REST Framework
- **Database**: SQLite (development), PostgreSQL (production)
- **Authentication**: JWT (via djangorestframework-simplejwt)
- **Version Control**: Git & GitHub

## Development Setup

1. Create a virtual environment:
   ```powershell
   python -m venv env
   .\env\Scripts\activate
   ```

2. Install dependencies:
   ```powershell
   pip install django djangorestframework djangorestframework-simplejwt
   ```

3. Start the Django development server:
   ```powershell
   python manage.py runserver
   ```

4. Access the application at `http://127.0.0.1:8000/`.

## License

This project is licensed under the MIT License.

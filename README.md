# Stuggen
Project work for Agile Development course at Uppsala University
# Project Name
STUGGEN (StudentGuide)
## Description
This is an open-source project for [Agile Development course](https://www.uu.se/en/study/syllabus?query=38628) at Uppsala University. The project aims to give a opensourced website for acessing Uppsala nations events all in one aggregated place.

## Getting Started
To get started with development, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/DavidHakansson/StudentGuide.git
    ```

2. Install the dependencies:
    ```bash
    npm install --legacy-peer-deps
    ```

3. Set up the project:
    - The events data can be accessed through the following URL: [Google Sheets Document](https://docs.google.com/spreadsheets/d/1qbPA7kNlV1fn8ndyJShn5uJuYU-bAlA10sGE1sP8pKY/edit?usp=drive_web&ouid=107405237565051239871).
    - Configure the necessary credentials and access tokens to interact with the Google Sheets API.

4. Start the development server:
    ```bash
    npm start
    ```

## Hosting
The project is hosted using AWS Amplify. You can access the live site at [stuggen.se](https://www.stuggen.se).

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

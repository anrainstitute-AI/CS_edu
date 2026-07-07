/* ---- Blog posts ----------------------------------------------------------- */
const BLOG_POSTS = [
  {
    
    id: 1,
    title: "Top 10 SQL Interview Questions with Answers",
    topic: "SQL",
    date: "2026-07-07",
    readTime: "8 min",
    excerpt: "Prepare for your SQL interviews with the top 10 most frequently asked SQL interview questions and answers.",

    image: "images/sql-interview.jpg",

    content: `

    <h1>Top 10 SQL Interview Questions with Answers (2026 Guide)</h1>

    <p>
        SQL (Structured Query Language) is one of the most important skills
        for Data Analysts, Database Developers, Data Scientists, and Software Engineers.
        This guide covers the most commonly asked SQL interview questions.
    </p>

    <h2>1. What is SQL?</h2>

    <p>
        SQL stands for Structured Query Language and is used to interact
        with relational databases.
    </p>

    <pre><code>
SELECT * FROM Employees;
    </code></pre>

    <h2>2. Difference Between DELETE, TRUNCATE and DROP</h2>

    <table class="table table-bordered">

        <thead>
            <tr>
                <th>Command</th>
                <th>Deletes Data</th>
                <th>Deletes Structure</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>DELETE</td>
                <td>Yes</td>
                <td>No</td>
            </tr>

            <tr>
                <td>TRUNCATE</td>
                <td>All Rows</td>
                <td>No</td>
            </tr>

            <tr>
                <td>DROP</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
        </tbody>

    </table>

    <h2>3. What is a Primary Key?</h2>

    <p>
        A Primary Key uniquely identifies each row in a table.
    </p>

    <pre><code>
CREATE TABLE Employee
(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100)
);
    </code></pre>

    <h2>4. Difference Between WHERE and HAVING</h2>

    <p>
        WHERE filters rows before grouping while HAVING filters
        grouped records after aggregation.
    </p>

    <pre><code>
SELECT DepartmentID,
       COUNT(*)
FROM Employee
GROUP BY DepartmentID
HAVING COUNT(*) > 5;
    </code></pre>

    <h2>5. Difference Between INNER JOIN and LEFT JOIN</h2>

    <p>
        INNER JOIN returns matching records while LEFT JOIN returns
        all records from the left table.
    </p>

    <pre><code>
SELECT *
FROM Employee E
INNER JOIN Department D
ON E.DepartmentID = D.DepartmentID;
    </code></pre>

    <h2>6. What is a Subquery?</h2>

    <p>
        A query inside another query is called a Subquery.
    </p>

    <pre><code>
SELECT EmployeeName,
       Salary
FROM Employee
WHERE Salary >
(
    SELECT AVG(Salary)
    FROM Employee
);
    </code></pre>

    <h2>7. UNION vs UNION ALL</h2>

    <p>
        UNION removes duplicates while UNION ALL keeps duplicates.
    </p>

    <pre><code>
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers;
    </code></pre>

    <h2>8. What are Window Functions?</h2>

    <p>
        Window Functions perform calculations across rows while preserving
        individual row details.
    </p>

    <pre><code>
SELECT
EmployeeName,
Salary,
RANK() OVER
(
ORDER BY Salary DESC
) AS SalaryRank
FROM Employee;
    </code></pre>

    <h2>9. How to Find the Second Highest Salary?</h2>

    <pre><code>
SELECT Salary
FROM
(
    SELECT Salary,
           DENSE_RANK() OVER
           (
             ORDER BY Salary DESC
           ) AS RankNo
    FROM Employee
) A
WHERE RankNo = 2;
    </code></pre>

    <h2>10. What is a Common Table Expression (CTE)?</h2>

    <p>
        A CTE is a temporary named result set used within a query.
    </p>

    <pre><code>
WITH HighSalaryEmployees AS
(
    SELECT *
    FROM Employee
    WHERE Salary > 50000
)
SELECT *
FROM HighSalaryEmployees;
    </code></pre>

    <h2>Bonus Question</h2>

    <h3>
        Find the Top 3 Highest Paid Employees
        in Each Department
    </h3>

    <pre><code>
WITH RankedEmployees AS
(
    SELECT
        EmployeeID,
        EmployeeName,
        DepartmentID,
        Salary,
        DENSE_RANK() OVER
        (
            PARTITION BY DepartmentID
            ORDER BY Salary DESC
        ) AS RankNo
    FROM Employee
)
SELECT *
FROM RankedEmployees
WHERE RankNo <= 3;
    </code></pre>

    <h2>Conclusion</h2>

    <p>
        SQL remains one of the most valuable technical skills in the IT industry.
        Understanding Joins, Subqueries, Window Functions, and CTEs will help
        you succeed in interviews and real-world projects.
    </p>

    `

},
  {
    id: "b-trees-explained",
    title: "Why Databases Love B-Trees",
    topic: "DBMS",
    date: "2026-05-28",
    readTime: "9 min",
    excerpt: "Indexes make queries fast — but why a B-tree and not a binary search tree? We dig into branching factor and disk reads.",
    cover: "violet"
  },
  {
    id: "deadlocks-demystified",
    title: "Deadlocks, Demystified",
    topic: "Operating System",
    date: "2026-05-09",
    readTime: "6 min",
    excerpt: "Four conditions, one circular wait. A walk-through of how deadlocks form and the strategies OS schedulers use to dodge them.",
    cover: "mint"
  },
  {
    id: "tcp-three-way-handshake",
    title: "The TCP Handshake, Packet by Packet",
    topic: "Computer Networks",
    date: "2026-04-22",
    readTime: "5 min",
    excerpt: "SYN, SYN-ACK, ACK — three packets that quietly start every reliable connection on the internet.",
    cover: "amber"
  },
  {
    id: "gradient-descent-by-hand",
    title: "Gradient Descent, Computed by Hand",
    topic: "Machine Learning",
    date: "2026-04-03",
    readTime: "10 min",
    excerpt: "Before you call .fit(), trace one full update step yourself. It changes how you debug training curves forever.",
    cover: "violet"
  },
  {
    id: "prompting-as-engineering",
    title: "Prompting Is an Engineering Discipline Now",
    topic: "AI Tools",
    date: "2026-03-19",
    readTime: "6 min",
    excerpt: "Treat prompts like code: version them, test them, and review them. Here's a lightweight workflow that scales.",
    cover: "mint"
  }
];
import { Book } from '../types'

export function listOfBooks(search: string): Book[] {

  return [
    {
      slug: 'the-art-of-software-development',
      details: {
        title: 'The Art of Software Development',
        author: 'Alice Johnson',
        description: `
_The Art of Software Development_ delves into the principles, strategies, and philosophies of crafting high-quality software.  

It emphasizes creating maintainable and efficient code while fostering teamwork and collaboration.  

Topics include software architecture, design patterns, agile methodologies, and coding best practices.  

Real-world examples and actionable advice make it a go-to guide for developers aiming to deliver software that adapts to changing requirements and meets business needs.  
        `,
        rating: 4,
        price: 19.99
      }
    },
    {
      slug: 'learning-typescript',
      details: {
        title: 'Learning TypeScript',
        author: 'Bob Smith',
        description: `
_Learning TypeScript_ is a comprehensive guide to mastering TypeScript's type system, which enhances JavaScript development.  

The book covers everything from fundamental syntax to advanced features such as generics, decorators, and type inference.  

Practical examples and projects demonstrate how to integrate TypeScript with frameworks like Angular, React, and Node.js.  

By the end, readers gain the skills to build scalable and maintainable enterprise-level applications using TypeScript.  
`,
        rating: 4.5,
        price: 11.99
      }
    },
    {
      slug: 'refactoring',
      details: {
        title: 'Refactoring',
        author: 'Martin Fowler',
        description: `
Martin Fowler's classic, _Refactoring_, teaches developers how to improve existing code without altering its external behavior.  

It provides a systematic approach to identifying code smells, applying refactoring techniques, and ensuring quality through automated testing.  

Through case studies and detailed examples, the book demonstrates transforming poorly structured code into clean, efficient solutions.  

It’s an essential resource for maintaining high-quality, long-lasting software systems.  
`,
        rating: 3,
        price: 21.99
      }
    },
    {
      slug: 'elements-of-reusable-object-oriented-software',
      details: {
        title: 'Elements of Reusable Object-Oriented Software',
        author: 'Grady Booch',
        description: `
Often called the "Gang of Four" (GoF) book, _Elements of Reusable Object-Oriented Software_ introduces 23 foundational design patterns for object-oriented programming.  

Each pattern is explained with diagrams, examples, and discussions on when to use them.  

Topics include structural patterns like Adapter and Composite and behavioral patterns like Strategy and Observer.  

This book is indispensable for creating reusable, scalable, and robust software systems.  
`,
        rating: 5,
        price: 24.99
      }
    },
    {
      slug: 'mastering-web-development',
      details: {
        title: 'Mastering Web Development',
        author: 'Cybellium Ltd',
        description: `
_Mastering Web Development_ offers an in-depth look at modern web development, from front-end technologies like HTML5, CSS3, and JavaScript to back-end frameworks, APIs, and database integration.  

The book explores responsive design principles, performance optimization, and cutting-edge tools.  

Practical projects provide hands-on experience in building dynamic, secure, and scalable web applications, making it suitable for both beginners and experienced developers.  

        `,
        rating: 4.5,
        price: 14.99
      }
    },
    {
      slug: 'the-modern-ux-design',
      details: {
        title: 'The Modern UX Design',
        author: 'Morgan Odok',
        description: `
_The Modern UX Design_ focuses on creating intuitive and engaging user experiences.  

The book covers user research, wireframing, prototyping, usability testing, and design systems.  

It integrates insights from cognitive psychology and interaction design to help readers craft interfaces that align with user needs and business goals.  

Real-world case studies and exercises make it a valuable resource for both aspiring and experienced UX designers.  
        `,
        rating: 3.5,
        price: 14.99
      }
    },
    {
      slug: 'learning-javascript-design-patterns',
      details: {
        title: 'Learning JavaScript Design Patterns',
        author: 'Addy Osmani',
        description: `
_Learning JavaScript Design Patterns_ introduces structured approaches to solving common programming challenges using design patterns.  

It covers classic patterns like Singleton, Factory, and Module and explores modern JavaScript-specific patterns.  

With practical examples, ES6+ features, and applications in frameworks like React and Vue, the book equips readers to create robust, maintainable, and efficient JavaScript applications.
        `,
        rating: 4.5,
        price: 12.99
      }
    },
    {
      slug: 'the-pragmatic-programmer',
      details: {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        description: `
_The Pragmatic Programmer_ is a timeless guide for software developers, emphasizing continuous learning, problem-solving, and effective communication.

Topics include debugging, automation, testing, and version control.

With practical tips, anecdotes, and exercises, the book inspires developers to think critically about their craft and adopt pragmatic approaches to software development, fostering adaptability and excellence.
`,
        rating: 5,
        price: 8.99
      }
    }
  ].filter(({ details }) => details.title.toLowerCase().includes(search))
}

export function findBookBySlug(slug: string): Book | undefined {
  return listOfBooks('').find(book => book.slug === slug)
}

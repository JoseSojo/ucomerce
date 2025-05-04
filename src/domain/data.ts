import { faker } from '@faker-js/faker';
import { ActiveCredit, ActiveUser, Category, Product, ProductCrud, Sale } from '../domain/types';
import { BlogPost } from './blog';

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      { id: 1, name: "Audio" },
      { id: 2, name: "Cameras" },
      { id: 3, name: "Smart Home" },
      { id: 4, name: "Computers" }
    ]
  },
  {
    id: 2,
    name: "Fashion",
    subcategories: [
      { id: 5, name: "Men's Clothing" },
      { id: 6, name: "Women's Clothing" },
      { id: 7, name: "Footwear" },
      { id: 8, name: "Accessories" }
    ]
  },
  {
    id: 3,
    name: "Home",
    subcategories: [
      { id: 9, name: "Furniture" },
      { id: 10, name: "Bedding" },
      { id: 11, name: "Kitchen" },
      { id: 12, name: "Decor" }
    ]
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "Experience crystal clear sound with our premium wireless headphones.",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.5
  },
  {
    id: 2,
    name: "Slim Fit T-Shirt",
    price: 24.99,
    description: "Classic slim fit t-shirt made from 100% organic cotton.",
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Fashion",
    subcategory: "Men's Clothing",
    rating: 4.2
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: 149.99,
    description: "Sleek modern coffee table with tempered glass top and wooden base.",
    image: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home",
    subcategory: "Furniture",
    rating: 4.7
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    price: 899.99,
    description: "Capture stunning photos with this professional-grade DSLR camera.",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics",
    subcategory: "Cameras",
    rating: 4.8
  },
  {
    id: 5,
    name: "Women's Running Shoes",
    price: 89.99,
    description: "Lightweight running shoes with superior cushioning and support.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Fashion",
    subcategory: "Footwear",
    rating: 4.3
  },
  {
    id: 6,
    name: "Smart Home Speaker",
    price: 129.99,
    description: "Voice-controlled smart speaker with built-in AI assistant.",
    image: "https://images.pexels.com/photos/6053/man-hands-technology-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics",
    subcategory: "Smart Home",
    rating: 4.4
  },
  {
    id: 7,
    name: "Stainless Steel Watch",
    price: 199.99,
    description: "Classic stainless steel watch with Swiss movement.",
    image: "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Fashion",
    subcategory: "Accessories",
    rating: 4.6
  },
  {
    id: 8,
    name: "Organic Cotton Bedding Set",
    price: 79.99,
    description: "Luxurious organic cotton bedding set for a comfortable night's sleep.",
    image: "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home",
    subcategory: "Bedding",
    rating: 4.5
  },
  {
    id: 9,
    name: "Gaming Laptop",
    price: 1299.99,
    description: "High-performance gaming laptop for the ultimate gaming experience.",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics",
    subcategory: "Computers",
    rating: 4.9
  },
  {
    id: 10,
    name: "Designer Handbag",
    price: 349.99,
    description: "Elegant designer handbag made from premium leather.",
    image: "https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Fashion",
    subcategory: "Accessories",
    rating: 4.7
  },
  {
    id: 11,
    name: "Non-Stick Cookware Set",
    price: 129.99,
    description: "Complete set of non-stick cookware for your kitchen.",
    image: "https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home",
    subcategory: "Kitchen",
    rating: 4.4
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    price: 89.99,
    description: "Compact wireless earbuds with noise-cancelling technology.",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.3
  },
];

export const ventasGraphic = [
  {
    name: 'Ventas 2023',
    data: [12, 24, 35, 46, 57, 79, 24, 67, 32, 67, 12, 45],
  },
  {
    name: 'Ventas 2024',
    data: [24, 35, 46, 57, 24, 67, 67, 12, 45, 232, 53, 132],
  },
  {
    name: 'Ventas 2025',
    data: [250, 234, 280, 123, 45],
  },
]

export const generateMockSales = (count: number): Sale[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    product: faker.commerce.productName(),
    quantity: faker.number.int({ min: 1, max: 10 }),
    unitPrice: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
    total: 0, // Se calcula abajo
    date: faker.date.recent({ days: 30 }), // Últimos 30 días
    paymentMethod: faker.helpers.arrayElement([
      'Tarjeta',
      'Efectivo',
      'Transferencia',
      'Cripto',
    ]),
  })).map((sale) => ({
    ...sale,
    total: sale.quantity * sale.unitPrice, // Calcula el total
  }));
};

export const generateMockActiveUsers = (count: number): ActiveUser[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    lastActive: faker.date.recent({ days: 7 }), // Últimos 7 días
    role: faker.helpers.arrayElement(['Admin', 'User', 'Guest'] as const),
    avatar: faker.image.avatar(), // Opcional: URL de imagen aleatoria
    isActive: faker.datatype.boolean({ probability: 0.8 }), // 80% de probabilidad de estar activo
  }));
};

export const generateMockActiveCredits = (count: number): ActiveCredit[] => {
  return Array.from({ length: count }, () => {
    const totalAmount = faker.number.float({ min: 1000, max: 50000 });
    const paidAmount = faker.number.float({ min: 0, max: totalAmount });
    const remainingAmount = totalAmount - paidAmount;

    // Fechas relativas
    const approvalDate = faker.date.past({ years: 1 });
    const nextPaymentDate = faker.date.soon({ days: 30 });

    // Estado basado en lógica de negocio
    let status: 'Activo' | 'Moroso' | 'Liquidado';
    if (remainingAmount <= 0) {
      status = 'Liquidado';
    } else if (faker.datatype.boolean({ probability: 0.2 })) {
      status = 'Moroso';
    } else {
      status = 'Activo';
    }

    return {
      id: faker.string.uuid(),
      user: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
      totalAmount,
      paidAmount,
      remainingAmount,
      approvalDate,
      status,
      nextPaymentDate,
    };
  });
};

export const generateMockProducts = (count: number): ProductCrud[] => {
  const categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Sports'];

  return Array.from({ length: count }, () => {
    const creationDate = faker.date.between({
      from: '2023-01-01',
      to: '2025-05-01'
    }).toISOString();

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
      category: faker.helpers.arrayElement(categories),
      stock: faker.number.int({ min: 0, max: 100 }),
      imageUrl: `/image.jpeg`,
      createdAt: creationDate,
      updatedAt: faker.date.between({
        from: creationDate,
        to: new Date().toISOString()
      }).toISOString()
    };
  });
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development in 2025 and beyond.',
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move further into 2025, several key trends are shaping the future of how we build and interact with web applications.</p>
      
      <h2>The Rise of AI-Assisted Development</h2>
      <p>Artificial intelligence is no longer just a buzzword in web development. Today's developers leverage AI tools to write cleaner code, debug more efficiently, and even design user interfaces. These AI assistants can analyze massive codebases to suggest optimizations and identify potential issues before they become problems.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has matured into a powerful technology that allows developers to run code at near-native speed in the browser. This has opened up new possibilities for web applications, from complex data visualizations to full-featured video editing tools running entirely in the browser.</p>
      
      <h2>Edge Computing Transforms Deployment</h2>
      <p>The traditional model of centralized servers is giving way to edge computing, where processing happens closer to where data is created. This means faster response times and reduced bandwidth usage, creating web experiences that feel instantaneous to users around the globe.</p>
      
      <h2>The Jamstack Architecture Evolution</h2>
      <p>The Jamstack approach continues to evolve, focusing on decoupled architecture that leverages JavaScript, APIs, and Markup. This results in websites that are faster, more secure, and easier to scale, all while providing a better developer experience.</p>
      
      <p>As these technologies continue to mature and new ones emerge, the future of web development looks incredibly promising. The web platform is more capable than ever, and the tools at our disposal are increasingly sophisticated, allowing us to create experiences that were once impossible in a browser environment.</p>
    `,
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    coverImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readingTime: 6,
    date: 'May 15, 2025',
    category: 'Technology',
    tags: ['Web Development', 'Future Tech', 'JavaScript'],
  },
  {
    id: '2',
    title: 'Designing for Accessibility: A Comprehensive Guide',
    excerpt: 'Learn how to make your websites accessible to everyone, including people with disabilities.',
    content: `
      <p>Web accessibility is about ensuring that websites and web applications are designed and developed so that people with disabilities can use them. This includes access to information and interaction with functionality available to all users.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Beyond the ethical imperative, making your website accessible expands your potential audience, improves SEO, and in many jurisdictions, helps you comply with legal requirements. An accessible website is a better website for everyone, not just those with disabilities.</p>
      
      <h2>Key Accessibility Principles</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) define four key principles that form the foundation of web accessibility:</p>
      <ul>
        <li><strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive.</li>
        <li><strong>Operable</strong>: User interface components and navigation must be operable.</li>
        <li><strong>Understandable</strong>: Information and operation of the user interface must be understandable.</li>
        <li><strong>Robust</strong>: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
      </ul>
      
      <h2>Practical Implementation Steps</h2>
      <p>Implementing accessibility isn't about ticking boxes; it's about integrating accessibility thinking into your design and development process. Here are some practical steps:</p>
      <ul>
        <li>Use semantic HTML elements that inherently communicate their purpose.</li>
        <li>Ensure sufficient color contrast between text and background.</li>
        <li>Provide text alternatives for non-text content like images.</li>
        <li>Ensure that all functionality is available from a keyboard.</li>
        <li>Design forms with clear labels and error messages.</li>
        <li>Test your site with screen readers and other assistive technologies.</li>
      </ul>
      
      <p>By incorporating these practices into your workflow, you're not just complying with guidelines—you're creating a better user experience for everyone who visits your site.</p>
    `,
    author: {
      name: 'Jamie Smith',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readingTime: 8,
    date: 'April 28, 2025',
    category: 'Design',
    tags: ['Accessibility', 'UX Design', 'Inclusive Design'],
  },
  {
    id: '3',
    title: 'Optimizing React Performance for Complex Applications',
    excerpt: 'Advanced techniques to ensure your React applications stay fast even as they grow in complexity.',
    content: `
      <p>As React applications grow in size and complexity, performance optimization becomes increasingly important. A sluggish user interface can frustrate users and negatively impact engagement. This article explores advanced strategies to keep your React applications running smoothly at scale.</p>
      
      <h2>Profiling and Measuring Performance</h2>
      <p>Before optimizing, you need to understand where performance issues are occurring. React's built-in Profiler API and DevTools provide powerful insights into component rendering behavior and can help identify problematic renders, state updates, and effects.</p>
      
      <h2>Memoization Techniques</h2>
      <p>React provides several APIs for memoization that can prevent unnecessary recalculations and renders:</p>
      <ul>
        <li><strong>React.memo</strong>: Prevent component re-renders when props haven't changed.</li>
        <li><strong>useMemo</strong>: Cache calculated values between renders.</li>
        <li><strong>useCallback</strong>: Prevent function recreations that can cause child components to re-render.</li>
      </ul>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Large bundles can significantly increase initial load times. By implementing code splitting with React.lazy and Suspense, you can load components only when they're needed, reducing the initial JavaScript payload and improving perceived performance.</p>
      
      <h2>Virtualization for Long Lists</h2>
      <p>Rendering large lists can cause significant performance issues. Virtual list libraries like react-window and react-virtualized render only the items currently visible in the viewport, dramatically reducing DOM nodes and improving scrolling performance.</p>
      
      <h2>State Management Optimization</h2>
      <p>How you structure and update your application state can have a major impact on performance. Whether you're using React's Context API, Redux, Zustand, or another solution, techniques like normalizing state, selective subscribing, and avoiding deep nesting can prevent cascading re-renders.</p>
      
      <p>By implementing these advanced optimization strategies, you can ensure your React application remains responsive and delivers a smooth user experience even as it scales in complexity and size.</p>
    `,
    author: {
      name: 'Taylor Wong',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    coverImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readingTime: 10,
    date: 'April 15, 2025',
    category: 'Development',
    tags: ['React', 'Performance', 'JavaScript'],
  },
  {
    id: '4',
    title: 'The Psychology of Color in Web Design',
    excerpt: 'Understand how color choices influence user perception and behavior on your website.',
    content: `
      <p>Color is one of the most powerful tools in a web designer's arsenal. It can evoke emotions, guide attention, communicate meaning, and even influence user decisions. Understanding the psychological impact of color choices is essential for creating effective web designs.</p>
      
      <h2>Emotional Responses to Colors</h2>
      <p>Different colors tend to evoke different emotional responses:</p>
      <ul>
        <li><strong>Blue</strong>: Often associated with trust, security, and professionalism, making it popular for financial institutions and corporate websites.</li>
        <li><strong>Red</strong>: Creates urgency and excitement, frequently used for calls to action and sale announcements.</li>
        <li><strong>Green</strong>: Suggests growth, health, and environmental consciousness.</li>
        <li><strong>Yellow</strong>: Evokes optimism and clarity but should be used sparingly as it can strain eyes.</li>
        <li><strong>Purple</strong>: Often associated with creativity, luxury, and wisdom.</li>
      </ul>
      
      <h2>Cultural Considerations</h2>
      <p>Color associations can vary significantly across different cultures. For example, while white is associated with purity in Western cultures, it's associated with mourning in some Eastern cultures. Consider your audience's cultural background when selecting a color palette.</p>
      
      <h2>Color and Brand Identity</h2>
      <p>Your color choices play a crucial role in establishing and reinforcing brand identity. Consistent use of brand colors across your website helps build recognition and trust. Research suggests that brand recognition can increase by up to 80% with consistent color use.</p>
      
      <h2>Accessibility and Color</h2>
      <p>When designing with color, always consider accessibility. Ensure sufficient contrast between text and background colors, and never rely solely on color to convey important information, as this excludes users with color vision deficiencies.</p>
      
      <h2>Testing Color Effectiveness</h2>
      <p>A/B testing different color schemes can provide valuable insights into how color choices affect user behavior on your specific website. Small changes, like altering the color of a call-to-action button, can sometimes lead to significant changes in conversion rates.</p>
      
      <p>By thoughtfully applying color psychology principles to your web design, you can create more engaging, effective, and emotionally resonant user experiences that support your overall goals.</p>
    `,
    author: {
      name: 'Jordan Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    coverImage: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readingTime: 7,
    date: 'April 5, 2025',
    category: 'Design',
    tags: ['Color Theory', 'Web Design', 'UX'],
  },
  {
    id: '5',
    title: 'Building Secure Authentication Systems',
    excerpt: 'Learn the best practices for implementing secure user authentication in modern web applications.',
    content: `
      <p>Authentication is a critical component of web applications that handle user data. A secure authentication system protects both your users and your application from unauthorized access and potential data breaches.</p>
      
      <h2>Beyond Username and Password</h2>
      <p>While username/password authentication remains common, it's increasingly supplemented or replaced by more secure methods:</p>
      <ul>
        <li><strong>Multi-factor authentication (MFA)</strong>: Requires users to verify their identity through multiple methods, significantly reducing the risk of unauthorized access.</li>
        <li><strong>Passwordless authentication</strong>: Eliminates password vulnerabilities by using email magic links, SMS codes, or biometric verification.</li>
        <li><strong>OAuth and social logins</strong>: Allow users to authenticate through trusted third parties while reducing friction.</li>
      </ul>
      
      <h2>Password Security Best Practices</h2>
      <p>If your system uses passwords, implement these essential security measures:</p>
      <ul>
        <li>Never store passwords in plain text; use modern hashing algorithms like bcrypt, Argon2, or PBKDF2.</li>
        <li>Enforce strong password policies without creating user frustration.</li>
        <li>Implement account lockout policies to prevent brute force attacks.</li>
        <li>Use secure password reset flows that don't reveal account information.</li>
      </ul>
      
      <h2>Managing Authentication Tokens</h2>
      <p>Token-based authentication requires careful implementation:</p>
      <ul>
        <li>Use short-lived access tokens and secure refresh token rotation.</li>
        <li>Store tokens securely, using HttpOnly cookies for sessions tokens.</li>
        <li>Implement proper token invalidation on logout and password changes.</li>
      </ul>
      
      <h2>Security Headers and HTTPS</h2>
      <p>Protect authentication flows with proper security headers and HTTPS implementation:</p>
      <ul>
        <li>Enable strict HTTPS with HSTS headers.</li>
        <li>Implement CSP, X-XSS-Protection, and other security headers.</li>
        <li>Use SameSite cookie attributes to prevent CSRF attacks.</li>
      </ul>
      
      <p>Building a secure authentication system requires balancing security needs with user experience considerations. By implementing modern best practices, you can create a system that protects user data while providing a smooth authentication experience.</p>
    `,
    author: {
      name: 'Sam Rivera',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readingTime: 9,
    date: 'March 22, 2025',
    category: 'Security',
    tags: ['Authentication', 'Web Security', 'Development'],
  },
];

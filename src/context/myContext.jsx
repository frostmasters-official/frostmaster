"use client";
import { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export const myContext = createContext();

const navLinks = [
  { name: "Home", to: "#home", key: "home" },
  { name: "Services", to: "#services", key: "services" },
  { name: "Feedback", to: "#feedback", key: "feedback" },
  { name: "About", to: "#about", key: "about" },
  { name: "Contact", to: "#contact", key: "contact" },
];

export const ContextProvider = ({ children }) => {
  // refs
  const homeRef = useRef(null);
  const feedbackRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const csrfTokenRef = useRef(null);

  useEffect(() => {
    fetch("/api/csrf", { credentials: "same-origin" })
      .then((r) => r.json())
      .then((data) => {
        csrfTokenRef.current = data?.token ?? null;
      })
      .catch(() => {});
  }, []);

  // feedback state
  const [feedback, setFeedback] = useState({
    name: "",
    city: "",
    email: "",
    stars: "",
    message: "",
  });

  // contact state
  const [contact, setContact] = useState({
    contactName: "",
    contactNumber: "",
    contactEmail: "",
    contactCity: "",
    product: "",
    complaint: [], // now array
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("contact");
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);

  // navbar
  // navbar
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // FAQ State
  const defaultFaqs = [
    {
      question: "What services does Frost Masters offer?",
      answer:
        "We provide home appliance services, including washing machine service, AC service, fridge service, water heater service, geyser, microwave oven, dishwasher, chimney cleaning, and water purifier service.",
    },
    {
      question: "How can I book a service with Frost Masters?",
      answer:
        "You can book by visiting our website, filling the contact form, or calling your city number: Chennai 6282450300 or Coimbatore 6282450300. We confirm the slot and send a technician to your doorstep.",
    },
    {
      question: "What is the service response time?",
      answer:
        "Our standard response time is within 24 hours. Same-day or next-day slots are available based on your area. Emergency requests are prioritised where possible.",
    },
    {
      question: "Are your technicians experienced and safe?",
      answer:
        "Yes. All our technicians are professionally trained with 10+ years of experience. They are background-verified, wear company ID/uniform, and follow strict safety and hygiene practices at your home.",
    },
    {
      question: "Do you use original spare parts for replacements?",
      answer:
        "Absolutely. We use genuine and quality spare parts for all repairs. Parts are sourced from authorised channels to ensure longevity and safety of your appliance.",
    },
    {
      question: "Can I reschedule or cancel my service request?",
      answer:
        "Yes. You can reschedule or cancel by calling your city number or replying to our confirmation. We request that you inform us in advance so we can adjust the schedule. No cancellation fee if informed before the visit.",
    },
    {
      question: "Do you provide service for all appliance brands?",
      answer:
        "Yes. We support major brands including LG, Samsung, Whirlpool, IFB, Godrej, Panasonic, Bosch, Daikin, Voltas, and other popular makes. Brand-specific expertise is available for complex repairs.",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "We serve Chennai and Coimbatore with multiple localities in each city. You can check our location pages for your area. Service is doorstep—our technician comes to your home or office.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer:
        "Yes. Same-day and next-day slots are offered subject to availability. For urgent breakdowns, call your city number and we will try to accommodate you at the earliest. Emergency visits may have different timing options.",
    },
    {
      question: "What are the charges for visit and repair?",
      answer:
        "We have a nominal visit/inspection charge. Repair cost depends on the fault and parts required. You get a clear estimate after inspection; work starts only after your approval. No hidden charges.",
    },
    {
      question: "Do you provide warranty on repairs?",
      answer:
        "Yes. We offer a 30-day service warranty on labour. Spare parts come with 3–6 months warranty depending on the component. Warranty is void if the appliance is tampered with by another party.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI (GPay, PhonePe), and online transfer. Payment is collected after the repair is completed and you are satisfied. No advance payment is required for standard bookings.",
    },
    {
      question: "Can I get an estimate before repair?",
      answer:
        "Yes. Our technician will inspect the appliance, explain the issue, and give you a written or verbal estimate for labour and parts. Repair begins only after you agree. You can decline and pay only the visit charge if you do not wish to proceed.",
    },
    {
      question: "Do you service on weekends and holidays?",
      answer:
        "Yes. We work seven days a week including weekends and most holidays. You can book a slot as per your convenience. Timings may vary; confirm with us when you call.",
    },
    {
      question: "How do I identify your technician?",
      answer:
        "Our technicians carry company ID and wear uniform. You will receive a confirmation with technician details before the visit. You can also verify by calling our official numbers: Chennai 6282450300 or Coimbatore 6282450300.",
    },
    {
      question: "What if my appliance is under manufacturer warranty?",
      answer:
        "If your appliance is still under brand warranty, we recommend contacting the brand service centre first for free repair. We can still help for out-of-warranty issues, second opinion, or when you prefer a local expert.",
    },
    {
      question: "Do you carry spare parts on the visit?",
      answer:
        "We carry common spare parts for AC, fridge, and washing machine. For rare or model-specific parts, we may need to order and schedule a follow-up visit. We will inform you at the time of inspection.",
    },
  ];

  const [faqList, setFaqList] = useState(defaultFaqs);

  const updateFaqList = (newList) => {
    setFaqList(newList && newList.length > 0 ? newList : defaultFaqs);
  };

  const pathname = usePathname();

  // On service pages hide only Home; keep Services so users can open dropdown and see all service pages
  const filteredLinks = pathname.startsWith("/services")
    ? navLinks.filter((link) => !["home"].includes(link.key))
    : navLinks;

  // navigation scroll
  const scrollToSection = (key) => {
    if (key === "services") {
      const target = document.querySelector("#services");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      const refs = {
        home: homeRef,
        feedback: feedbackRef,
        about: aboutRef,
        contact: contactRef,
      };
      refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onNavigate = {
    home: () => scrollToSection("home"),
    services: () => scrollToSection("services"),
    feedback: () => scrollToSection("feedback"),
    about: () => scrollToSection("about"),
    contact: () => scrollToSection("contact"),
  };

  // contact validation
  const validateContact = () => {
    const newErrors = {};
    if (!contact.contactName.trim())
      newErrors.contactName = "Name is required.";
    if (!contact.contactNumber.trim()) {
      newErrors.contactNumber = "Number is required.";
    } else if (!/^[6-9]\d{9}$/.test(contact.contactNumber.trim())) {
      newErrors.contactNumber = "Enter a valid 10-digit mobile number.";
    }
    if (!contact.contactCity.trim())
      newErrors.contactCity = "City is required.";
    if (!contact.product) newErrors.product = "Please select a product.";
    if (!contact.complaint || contact.complaint.length === 0)
      newErrors.complaint = "Please select at least one complaint.";
    return newErrors;
  };

  // feedback validation
  const validateFeedback = () => {
    const newErrors = {};
    if (!feedback.name.trim()) newErrors.name = "Name is required.";
    if (!feedback.city.trim()) newErrors.city = "City is required.";
    if (!feedback.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(feedback.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!feedback.stars) newErrors.stars = "Please select a rating.";
    if (!feedback.message.trim()) newErrors.message = "Feedback is required.";
    return newErrors;
  };

  // contact input change
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  // feedback input change
  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  // star select
  const handleStarSelect = (value) => {
    setFeedback((prev) => ({ ...prev, stars: value }));
  };

  // toggle complaint dynamically
  const handleComplaintToggle = (complaint) => {
    setContact((prev) => {
      const exists = prev.complaint.includes(complaint);
      return {
        ...prev,
        complaint: exists
          ? prev.complaint.filter((c) => c !== complaint) // remove
          : [...prev.complaint, complaint], // add
      };
    });
  };

  // submit contact
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContact();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setContactSubmitting(true);
      try {
        const headers = {};
        if (csrfTokenRef.current)
          headers["X-CSRF-Token"] = csrfTokenRef.current;
        const response = await axios.post("/api/contact", contact, { headers });
        if (response.data.success) {
          toast.success("Success, Technician will contact you shortly!");
          setContact({
            contactName: "",
            contactEmail: "",
            contactNumber: "",
            contactCity: "",
            product: "",
            complaint: [],
          });
          setErrors({});
        } else {
          toast.error("Failed to submit.");
        }
      } catch (error) {
        console.log(error.message);
        toast.error("Server error");
      } finally {
        setContactSubmitting(false);
      }
    }
  };

  // submit feedback
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFeedback();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFeedbackSubmitting(true);
      try {
        const headers = {};
        if (csrfTokenRef.current)
          headers["X-CSRF-Token"] = csrfTokenRef.current;
        const response = await axios.post("/api/feedback", feedback, {
          headers,
        });
        if (response.data.success) {
          toast.success("Feedback submitted successfully!");
          setFeedback({
            name: "",
            city: "",
            email: "",
            stars: "",
            message: "",
          });
          setErrors({});
        } else {
          toast.error("Failed to submit feedback.");
        }
      } catch (error) {
        toast.error("Server error");
      } finally {
        setFeedbackSubmitting(false);
      }
    }
  };

  const context = {
    onNavigate,
    pathname,
    homeRef,
    feedbackRef,
    aboutRef,
    contactRef,
    feedback,
    setFeedback,
    scrollToSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrolled,
    setScrolled,
    filteredLinks,
    contact,
    setContact,
    activeTab,
    setActiveTab,
    errors,
    setErrors,
    handleContactSubmit,
    handleContactChange,
    handleComplaintToggle,
    handleFeedbackChange,
    handleStarSelect,
    handleFeedbackSubmit,
    contactSubmitting,
    feedbackSubmitting,
    faqList,
    updateFaqList,
  };

  return <myContext.Provider value={context}>{children}</myContext.Provider>;
};

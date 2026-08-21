import { Terminal, Code2, Link2, ShieldCheck, Map, Smartphone } from "lucide-react"
import { LabItemData } from "@/components/lab-interactive-card"

export const labItems: LabItemData[] = [
  {
    id: "contact_picker",
    title: "Flutter Native Contact Picker",
    description: "A high-performance native bridging package for querying and parsing device contacts on iOS (Contacts framework) and Android (ContactsContract) via asynchronous MethodChannels.",
    icon: Smartphone,
    type: "contact_picker",
  },
  {
    id: "khalti",
    title: "Payment Gateway Verification Suite",
    description: "Robust wrapper and state-machine verification engine for digital payment gateways (Khalti / DFS APIs) with cryptographic signature validation and token exchange.",
    icon: Link2,
    type: "khalti",
  },
  {
    id: "crypto",
    title: "CPClient Cryptographic Plugin",
    description: "Custom Flutter security plugin implementing client-side AES-256 GCM encryption, HMAC-SHA256 request payload signing, and hardware Keystore / Secure Enclave key management.",
    icon: Terminal,
    type: "crypto",
  },
  {
    id: "version_gate",
    title: "Dynamic Feature Version Gating",
    description: "System to dynamically toggle mobile app modules, experimental banking features, and permission gates based on API semantic versions and user cohort flags.",
    icon: Code2,
    type: "version_gate",
  },
  {
    id: "screenshot",
    title: "WindowManager FLAG_SECURE Shield",
    description: "Native platform bridge enforcing WindowManager.LayoutParams.FLAG_SECURE to prevent screen recordings, screenshots, and OS multitasking leaks in sensitive banking flows.",
    icon: ShieldCheck,
    type: "screenshot",
  },
  {
    id: "maps",
    title: "Galli Maps & Geospatial Utilities",
    description: "Geospatial utility wrapper integrating Galli Maps SDK for Nepal-specific coordinate transformations, bounding box computations, and Haversine distance matrix caching.",
    icon: Map,
    type: "maps",
  },
]

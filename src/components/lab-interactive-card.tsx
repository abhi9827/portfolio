"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { LucideIcon, Play, Shield, ShieldAlert, RefreshCw, Key, MapPin } from "lucide-react"

export interface LabItemData {
  id: string
  title: string
  description: string
  icon: LucideIcon
  type: "contact_picker" | "khalti" | "crypto" | "version_gate" | "screenshot" | "maps"
}

export function LabInteractiveCard({ item }: { item: LabItemData }) {
  const shouldReduceMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState<"overview" | "sandbox">("overview")

  // Sandbox states
  const [contactPicked, setContactPicked] = useState(false)
  const [isPicking, setIsPicking] = useState(false)

  const [khaltiStep, setKhaltiStep] = useState<"idle" | "signing" | "verifying" | "success">("idle")

  const plainText = "BankingSecretPayload_2026"
  const [isEncrypted, setIsEncrypted] = useState(true)

  const [appVersion, setAppVersion] = useState<"1.0" | "1.8" | "2.4">("1.8")

  const [flagSecure, setFlagSecure] = useState(false)

  // Handlers
  const triggerContactPicker = () => {
    setIsPicking(true)
    setTimeout(() => {
      setIsPicking(false)
      setContactPicked(true)
    }, shouldReduceMotion ? 0 : 500)
  }

  const triggerKhaltiFlow = () => {
    setKhaltiStep("signing")
    setTimeout(() => {
      setKhaltiStep("verifying")
      setTimeout(() => {
        setKhaltiStep("success")
      }, shouldReduceMotion ? 0 : 400)
    }, shouldReduceMotion ? 0 : 400)
  }

  return (
    <div className="group flex flex-col p-6 md:p-7 rounded-2xl bg-background border border-border hover:border-accent/60 transition-all duration-300 relative overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted group-hover:text-foreground group-hover:border-foreground transition-colors">
          <item.icon className="w-5 h-5" />
        </div>

        {/* Toggle Mode Button */}
        <button
          onClick={() => setActiveTab(activeTab === "overview" ? "sandbox" : "overview")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
            activeTab === "sandbox"
              ? "bg-foreground text-background"
              : "bg-surface border border-border text-muted hover:text-foreground"
          }`}
          data-cursor-interactive="true"
        >
          {activeTab === "sandbox" ? (
            <>
              <RefreshCw className="w-3 h-3" />
              <span>Info</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-500 fill-emerald-500" />
              <span>Testbench</span>
            </>
          )}
        </button>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
        {item.title}
      </h3>

      <div className="min-h-[140px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "overview" ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              <p className="text-sm text-muted leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted font-mono">
                <span>STATUS: PRODUCTION</span>
                <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                  Click Testbench to simulate &rarr;
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="sandbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between py-1"
            >
              {/* MICRO-SANDBOX 1: Contact Picker */}
              {item.type === "contact_picker" && (
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <div className="text-[10px] text-muted uppercase mb-1">
                      MethodChannel: &apos;plugins.f1/native_contacts&apos;
                    </div>
                    {contactPicked ? (
                      <div className="text-emerald-500 text-[11px] leading-tight">
                        ✓ Payload: &#123; name: &quot;Aarav Sharma&quot;, phone: &quot;+977-9841234567&quot; &#125;
                      </div>
                    ) : (
                      <div className="text-muted text-[11px]">
                        Channel ready. Awaiting invocation...
                      </div>
                    )}
                  </div>
                  <button
                    onClick={triggerContactPicker}
                    disabled={isPicking}
                    className="w-full py-2 bg-surface hover:bg-border/60 border border-border rounded-lg text-foreground font-sans font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                    data-cursor-interactive="true"
                  >
                    {isPicking ? "Invoking JNI Bridge..." : contactPicked ? "Re-invoke MethodChannel" : "Invoke pickContact()"}
                  </button>
                </div>
              )}

              {/* MICRO-SANDBOX 2: Khalti Payment Gateway */}
              {item.type === "khalti" && (
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <div className="flex justify-between text-[10px] text-muted uppercase mb-1">
                      <span>Gateway State</span>
                      <span className={khaltiStep === "success" ? "text-emerald-500 font-bold" : "text-muted"}>
                        {khaltiStep === "idle" && "READY"}
                        {khaltiStep === "signing" && "HMAC_SHA256"}
                        {khaltiStep === "verifying" && "VERIFYING"}
                        {khaltiStep === "success" && "STATUS_200_OK"}
                      </span>
                    </div>
                    <div className="text-[11px] text-foreground truncate">
                      {khaltiStep === "idle" && "Txn: NPR 5,000.00 • Order #KH-8921"}
                      {khaltiStep === "signing" && "Generating digital signature..."}
                      {khaltiStep === "verifying" && "Handshake with Khalti Gateway API..."}
                      {khaltiStep === "success" && "✓ Token: KHLTI_VERIFIED_7x9A2B"}
                    </div>
                  </div>
                  <button
                    onClick={triggerKhaltiFlow}
                    className="w-full py-2 bg-surface hover:bg-border/60 border border-border rounded-lg text-foreground font-sans font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                    data-cursor-interactive="true"
                  >
                    {khaltiStep === "success" ? "Re-run Verification" : "Simulate Payment Handshake"}
                  </button>
                </div>
              )}

              {/* MICRO-SANDBOX 3: Cryptographic CPClient */}
              {item.type === "crypto" && (
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <div className="flex justify-between text-[10px] text-muted uppercase mb-1">
                      <span>AES-256-GCM Hardware Cipher</span>
                      <span className="text-emerald-500">{isEncrypted ? "ENCRYPTED" : "PLAINTEXT"}</span>
                    </div>
                    <div className="text-[11px] text-foreground font-mono truncate">
                      {isEncrypted
                        ? "0x8F4E2B198A02D9C3E1F4A0B7C6E8"
                        : plainText}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEncrypted(!isEncrypted)}
                    className="w-full py-2 bg-surface hover:bg-border/60 border border-border rounded-lg text-foreground font-sans font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                    data-cursor-interactive="true"
                  >
                    <Key className="w-3.5 h-3.5 text-accent" />
                    <span>{isEncrypted ? "Decrypt with Secure Enclave" : "Encrypt with AES-256"}</span>
                  </button>
                </div>
              )}

              {/* MICRO-SANDBOX 4: Feature Version Gating */}
              {item.type === "version_gate" && (
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <div className="flex justify-between text-[10px] text-muted uppercase mb-1">
                      <span>Active Flags @ v{appVersion}</span>
                      <span className="text-emerald-500">Live Engine</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-background border border-border text-foreground">
                        ✓ Core Banking
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                        appVersion !== "1.0" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" : "opacity-30 border-border"
                      }`}>
                        {appVersion !== "1.0" ? "✓ Biometrics" : "✕ Biometrics"}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                        appVersion === "2.4" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30" : "opacity-30 border-border"
                      }`}>
                        {appVersion === "2.4" ? "✓ AI Insights" : "✕ AI Insights"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {(["1.0", "1.8", "2.4"] as const).map((ver) => (
                      <button
                        key={ver}
                        onClick={() => setAppVersion(ver)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          appVersion === ver
                            ? "bg-foreground text-background font-bold"
                            : "bg-surface border border-border text-muted hover:text-foreground"
                        }`}
                        data-cursor-interactive="true"
                      >
                        v{ver}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* MICRO-SANDBOX 5: Screenshot Security Shield */}
              {item.type === "screenshot" && (
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-surface border border-border relative overflow-hidden">
                    <div className="flex justify-between text-[10px] text-muted uppercase mb-1">
                      <span>WindowManager Policy</span>
                      <span className={flagSecure ? "text-emerald-500 font-bold" : "text-amber-500"}>
                        {flagSecure ? "FLAG_SECURE: ON" : "UNRESTRICTED"}
                      </span>
                    </div>
                    <div className={`text-[11px] transition-all duration-300 ${flagSecure ? "filter blur-sm select-none" : "text-foreground"}`}>
                      Balance: NPR 1,480,200.00 • Acc: **** 9012
                    </div>
                    {flagSecure && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-xs flex items-center justify-center gap-1.5 text-[10px] text-emerald-500 font-bold">
                        <Shield className="w-3.5 h-3.5" />
                        <span>CAPTURE PREVENTED</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setFlagSecure(!flagSecure)}
                    className="w-full py-2 bg-surface hover:bg-border/60 border border-border rounded-lg text-foreground font-sans font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                    data-cursor-interactive="true"
                  >
                    {flagSecure ? (
                      <>
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                        <span>Disable FLAG_SECURE</span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Enable FLAG_SECURE</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* MICRO-SANDBOX 6: Maps Utilities */}
              {item.type === "maps" && (
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-surface border border-border">
                    <div className="flex justify-between text-[10px] text-muted uppercase mb-1">
                      <span>Geospatial Haversine Calc</span>
                      <span className="text-emerald-500">~146.4 KM</span>
                    </div>
                    <div className="text-[11px] text-foreground flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-accent" />
                        <span>KTM &rarr; PKR</span>
                      </span>
                      <span className="text-muted text-[10px]">Δφ: 0.492°, Δλ: -1.338°</span>
                    </div>
                  </div>
                  <div className="py-2 px-3 bg-surface border border-border rounded-lg text-foreground font-mono text-center text-xs">
                    BoundingBox: [27.71, 83.98, 28.20, 85.32]
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

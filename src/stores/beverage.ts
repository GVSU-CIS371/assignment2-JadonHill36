import { ref, computed } from "vue"

// --- Ingredient Configurations ---
const BASES_DATA = [
  { name: "Coffee", color: "#6F4E37" },
  { name: "Green Tea", color: "#4CAF50" },
  { name: "Black Tea", color: "#2e1f0e" },
]

const CREAMERS_DATA = [
  { name: "No Creamer", color: "transparent" },
  { name: "Milk", color: "#F0F8FF" },
  { name: "Cream", color: "#FFFACD" },
  { name: "Half & Half", color: "#FAFAD2" },
]

const SYRUPS_DATA = [
  { name: "No Syrup", color: "transparent" },
  { name: "Vanilla", color: "#FFEFD5" },
  { name: "Caramel", color: "#DAA520" },
  { name: "Hazelnut", color: "#6B4423" },
]

const TEMPS_DATA = ["Hot", "Cold"]

// --- Selection Lists ---
export const CHOICES = {
  temp: TEMPS_DATA,
  base: BASES_DATA.map(d => d.name),
  creamer: CREAMERS_DATA.map(d => d.name),
  syrup: SYRUPS_DATA.map(d => d.name),
}

// --- Reactive State ---
export const currentTemp = ref(CHOICES.temp[0])
export const currentBase = ref(CHOICES.base[0])
export const currentCreamer = ref(CHOICES.creamer[0])
export const currentSyrup = ref(CHOICES.syrup[0])

// --- Color Map (Name → Color) ---
const colorMap: { [key: string]: string } = {}
;[...BASES_DATA, ...CREAMERS_DATA, ...SYRUPS_DATA].forEach(item => {
  colorMap[item.name] = item.color
})
export const COLORS = colorMap

// --- Dynamic Heights ---
const CREAMER_HEIGHT = 20 // %
const SYRUP_HEIGHT = 10  // %

export const dynamicHeights = computed(() => {
  const isCreamerSelected = currentCreamer.value !== "No Creamer"
  const isSyrupSelected = currentSyrup.value !== "No Syrup"

  const visibleCreamerHeight = isCreamerSelected ? CREAMER_HEIGHT : 0
  const visibleSyrupHeight = isSyrupSelected ? SYRUP_HEIGHT : 0
  const baseHeight = 100 - visibleCreamerHeight - visibleSyrupHeight

  return {
    creamer: `${visibleCreamerHeight}%`,
    syrup: `${visibleSyrupHeight}%`,
    base: `${baseHeight}%`,
    isCreamerVisible: isCreamerSelected,
    isSyrupVisible: isSyrupSelected,
  }
})

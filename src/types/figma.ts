/**
 * Figma 相关类型定义
 */

export interface FigmaFile {
  document: FigmaNode
  components: Record<string, FigmaComponent>
  componentSets: Record<string, any>
  schemaVersion: number
  styles: Record<string, FigmaStyle>
  name: string
  lastModified: string
  thumbnailUrl: string
  version: string
  role: string
  editorType: string
  linkAccess: string
}

export interface FigmaNode {
  id: string
  name: string
  type: string
  visible?: boolean
  opacity?: number
  blendMode?: string
  children?: FigmaNode[]
  absoluteBoundingBox?: {
    x: number
    y: number
    width: number
    height: number
  }
  fills?: FigmaFill[]
  strokes?: FigmaStroke[]
  strokeWeight?: number
  cornerRadius?: number
  characters?: string
  style?: FigmaTextStyle
  layoutMode?: 'HORIZONTAL' | 'VERTICAL'
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  itemSpacing?: number
}

export interface FigmaComponent {
  key: string
  name: string
  description: string
  componentSetId?: string
  documentationLinks: any[]
}

export interface FigmaStyle {
  key: string
  name: string
  styleType: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID'
  description: string
}

export interface FigmaFill {
  type: 'SOLID' | 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'IMAGE' | 'VIDEO'
  visible?: boolean
  opacity?: number
  color?: {
    r: number
    g: number
    b: number
    a: number
  }
  gradientStops?: any[]
  imageRef?: string
}

export interface FigmaStroke {
  type: 'SOLID' | 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL'
  visible?: boolean
  color?: {
    r: number
    g: number
    b: number
    a: number
  }
}

export interface FigmaTextStyle {
  fontFamily: string
  fontPostScriptName?: string
  paragraphSpacing?: number
  paragraphIndent?: number
  listOptions?: any
  fontSize: number
  textCase?: 'UPPER' | 'LOWER' | 'TITLE' | 'SMALL_CAPS' | 'SMALL_CAPS_FORCED'
  textDecoration?: 'UNDERLINE' | 'STRIKETHROUGH'
  fontWeight: number
  textAutoResize?: 'WIDTH_AND_HEIGHT' | 'HEIGHT' | 'NONE' | 'TRUNCATE'
  textAlignHorizontal?: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED'
  textAlignVertical?: 'TOP' | 'CENTER' | 'BOTTOM'
  letterSpacing?: {
    value: number
    unit: 'PIXELS' | 'PERCENT'
  }
  lineHeightPx?: number
  lineHeightPercent?: number
  lineHeightPercentFontSize?: number
  lineHeightUnit?: 'PIXELS' | 'PERCENT' | 'AUTO'
}

export interface FigmaDesignData {
  fileKey: string
  nodeId: string
  file?: FigmaFile
  nodes?: Record<string, { document: FigmaNode }>
  images?: Record<string, string>
}

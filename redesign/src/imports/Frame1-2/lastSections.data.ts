// Positions of every image in the three last sections (Santo ISEP, Video, UI/UX), in design px
// (the 1440px-wide frame). Edit x/y/w/h to move or crop a piece; swap `file` to change the picture
// (files live in src/assets/last). x,y,w,h = the visible window; ix,iy,iw,ih = where the full image
// sits inside that window (so crops are preserved).
export type Piece = { name: string; file: string; x: number; y: number; w: number; h: number; ix: number; iy: number; iw: number; ih: number; border?: boolean; rot?: number /* degrees, rotates the whole piece around its centre */ };

export const santoPieces: Piece[] = [
  { name: "crest-base", file: "x26_1738_36.webp", x: 306.0, y: 15623.2, w: 868.9, h: 603.9, ix: 0.0, iy: -0.0, iw: 868.9, ih: 603.9 },
  { name: "crest-overlay", file: "x22_1257_37.webp", x: 283.0, y: 15599.0, w: 850.0, h: 627.8, ix: 0.0, iy: -0.4, iw: 1053.0, ih: 628.3 },
  { name: "sketch-3", file: "x136_994_38.webp", x: 948.0, y: 16243.0, w: 388.0, h: 543.0, ix: -29.4, iy: -147.8, iw: 497.1, ih: 821.0 },
  { name: "banner", file: "x184_2428_39.webp", x: 122.0, y: 17310.0, w: 1214.0, h: 291.0, ix: 0.0, iy: -0.2, iw: 1214.0, ih: 291.3 },
  { name: "tile", file: "x184_4096_40.webp", x: 948.0, y: 16858.0, w: 388.0, h: 383.0, ix: -3829.3, iy: -658.4, iw: 5423.2, ih: 1301.2 },
  { name: "sketch-1", file: "x88_851_41.webp", x: 122.0, y: 16243.0, w: 400.0, h: 541.0, ix: -6.0, iy: -26.4, iw: 425.3, ih: 702.6 },
  { name: "sketch-2", file: "x34_898_42.webp", x: 543.0, y: 16243.0, w: 386.0, h: 541.0, ix: -33.0, iy: -41.5, iw: 448.8, ih: 740.9 },
  { name: "photo-banner", file: "x152_1160_43.webp", x: 124.0, y: 17630.0, w: 790.9, h: 1093.0, ix: -65.5, iy: -130.3, iw: 856.4, ih: 1284.1, border: true },
  { name: "poster", file: "x14_1079_44.webp", x: 758.0, y: 18752.0, w: 578.0, h: 1029.0, ix: -0.1, iy: 0.0, iw: 578.3, ih: 1029.0 },
];

export const videoPieces: Piece[] = [
  { name: "video-frame-01", file: "x188_1859_0.webp", x: 340.6, y: 23190.4, w: 780.0, h: 438.6, ix: -149.3, iy: -0.1, iw: 929.3, ih: 522.5 },
  { name: "video-frame-02", file: "x200_1560_1.webp", x: 340.6, y: 23190.4, w: 780.0, h: 438.6, ix: 0.0, iy: -0.1, iw: 780.0, ih: 438.8 },
  { name: "video-frame-03", file: "x140_872_2.webp", x: 715.1, y: 23684.4, w: 357.9, h: 201.4, ix: -39.1, iy: -0.0, iw: 436.1, ih: 201.5 },
  { name: "video-frame-04", file: "x196_872_3.webp", x: -34.9, y: 23686.1, w: 357.9, h: 201.4, ix: -39.1, iy: -0.0, iw: 436.1, ih: 201.5 },
  { name: "video-frame-05", file: "x234_872_4.webp", x: 333.9, y: 23686.2, w: 357.9, h: 201.4, ix: -39.1, iy: -0.0, iw: 436.1, ih: 201.5 },
  { name: "video-frame-06", file: "x266_871_5.webp", x: 1096.1, y: 23685.4, w: 357.9, h: 201.1, ix: -51.1, iy: -0.4, iw: 435.4, ih: 201.5 },
  { name: "video-frame-07", file: "x188_1859_0.webp", x: 318.0, y: 22361.0, w: 780.0, h: 438.6, ix: -149.3, iy: -0.1, iw: 929.3, ih: 522.5 },
  { name: "video-frame-08", file: "x132_1560_6.webp", x: 318.0, y: 22361.0, w: 780.0, h: 438.6, ix: 0.0, iy: -0.1, iw: 780.0, ih: 438.8 },
  { name: "video-frame-09", file: "x128_715_7.webp", x: 736.0, y: 22855.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-10", file: "x120_715_8.webp", x: -23.7, y: 22855.8, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-11", file: "x222_715_9.webp", x: 356.0, y: 22855.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-12", file: "x262_715_10.webp", x: 1116.0, y: 22855.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-13", file: "x246_715_11.webp", x: 728.4, y: 24543.1, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-14", file: "x116_826_12.webp", x: -21.0, y: 24979.0, w: 357.7, h: 200.3, ix: -5.9, iy: -32.3, iw: 412.9, ih: 232.6 },
  { name: "video-frame-15", file: "x284_715_13.webp", x: 354.0, y: 24979.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-16", file: "x112_715_14.webp", x: 1103.0, y: 24543.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-17", file: "x108_1561_15.webp", x: 25.7, y: 24051.5, w: 780.3, h: 439.3, ix: 0.0, iy: 0.0, iw: 780.3, ih: 439.3 },
  { name: "video-frame-18", file: "x124_1902_16.webp", x: 825.6, y: 24051.4, w: 584.7, h: 439.2, ix: -183.2, iy: -0.1, iw: 951.2, ih: 439.4 },
  { name: "video-frame-19", file: "x104_715_17.webp", x: 728.0, y: 24761.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-20", file: "x96_715_18.webp", x: 1103.0, y: 24761.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-21", file: "x144_715_19.webp", x: 354.0, y: 24761.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-22", file: "x336_715_20.webp", x: 729.0, y: 24979.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-23", file: "x92_715_21.webp", x: 1103.0, y: 24979.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-24", file: "x84_715_22.webp", x: 354.0, y: 24544.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-25", file: "x76_870_23.webp", x: -20.7, y: 24544.3, w: 357.7, h: 201.2, ix: -28.1, iy: -37.3, iw: 435.0, ih: 245.1 },
  { name: "video-frame-26", file: "x72_715_24.webp", x: -21.0, y: 24761.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-27", file: "x188_1859_0.webp", x: 318.0, y: 21489.0, w: 780.0, h: 438.6, ix: -149.3, iy: -0.1, iw: 929.3, ih: 522.5 },
  { name: "video-frame-28", file: "x68_715_25.webp", x: 710.0, y: 22022.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-29", file: "x100_715_26.webp", x: -48.0, y: 22022.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-30", file: "x64_715_27.webp", x: 331.0, y: 22022.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-31", file: "x344_715_28.webp", x: 1089.0, y: 22022.0, w: 357.7, h: 201.2, ix: 0.0, iy: -0.0, iw: 357.7, ih: 201.2 },
  { name: "video-frame-32", file: "x172_872_29.webp", x: 708.0, y: 21145.0, w: 357.7, h: 201.2, ix: -39.1, iy: 0.0, iw: 435.9, ih: 201.2 },
  { name: "video-frame-33", file: "x58_872_30.webp", x: -50.0, y: 21145.0, w: 357.7, h: 201.2, ix: -39.1, iy: 0.0, iw: 435.9, ih: 201.2 },
  { name: "video-frame-34", file: "x308_872_31.webp", x: 329.0, y: 21146.0, w: 357.7, h: 201.2, ix: -39.1, iy: 0.0, iw: 435.9, ih: 201.2 },
  { name: "video-frame-35", file: "x50_872_32.webp", x: 1087.0, y: 21146.0, w: 357.7, h: 201.2, ix: -39.1, iy: 0.0, iw: 435.9, ih: 201.2 },
  { name: "video-frame-36", file: "x46_1335_33.webp", x: 154.0, y: 20774.0, w: 547.0, h: 308.0, ix: -60.0, iy: -0.0, iw: 667.5, ih: 308.0 },
  { name: "video-frame-37", file: "x226_1118_34.webp", x: 774.0, y: 20766.0, w: 558.8, h: 336.1, ix: -0.0, iy: 0.0, iw: 558.8, ih: 336.1 },
  { name: "video-frame-38", file: "x38_1825_35.webp", x: 142.9, y: 20197.2, w: 733.1, h: 412.6, ix: -79.9, iy: -0.3, iw: 893, ih: 412.1, rot: -2.89 },
];

// Cyan underlines under "UI/UX Design" (vector path in page coordinates)
export const uiuxUnderlinePath = "M149.55 25512.97 L251.65 25501.78 L251.98 25504.76 L149.87 25515.95 Z M262.99 25500.53 L450.22 25480.00 L450.55 25482.99 L263.32 25503.52 Z M164.04 25645.18 L339.42 25625.95 L339.75 25628.93 L164.37 25648.16 Z M393.43 25620.03 L460.52 25612.67 L460.85 25615.65 L393.75 25623.01 Z";

function PremiumFeature({ isPremium }: { isPremium: boolean }) {
  if (!isPremium) {
    return <div>กรุณาอัพเกรดเป็น Premium เพื่อใช้งาน</div>;
  }

  return <div>Premium Feature พร้อมใช้งาน!</div>;
}

export default PremiumFeature;

// เป็นรูปแบบ early return
// ! คือการกลับข้าง แปลว่า !isPremium คือ ไม่ได้เป็น Premium

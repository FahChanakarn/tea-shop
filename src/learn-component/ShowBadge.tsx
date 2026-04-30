function ShowBadge({ badge }: { badge?: string }) {
  return <div>{badge && <span className="badge">{badge}</span>}</div>;
}

export default ShowBadge;

// จะ return แค่ในกรณีที่เป็น true เท่านั้น

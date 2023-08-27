export {};

declare global {
  interface Mission {
    name: string;
    flight: number;
  }

  interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    original_launch_unix: number;
    missions: Mission[];
    landings: number;
    type: string;
    details: string | null;
    reuse_count: number;
  }

  type Status = 'active' | 'retired' | 'unknown' | 'destroyed';
  type CapsuleType = 'Dragon 1.0' | 'Dragon 1.1' | 'Dragon 2.0';
}

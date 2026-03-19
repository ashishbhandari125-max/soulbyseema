import type { Enquiry } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteEnquiry,
  useGetEnquiries,
  useUpdateEnquiryStatus,
} from "@/hooks/useQueries";
import { CheckCircle, Clock, Loader2, RefreshCw, Trash2 } from "lucide-react";
import { useState } from "react";

const ADMIN_PASSWORD = "seema2024";

function formatDate(ts: bigint): string {
  return new Date(Number(ts) / 1_000_000).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function AdminDashboard() {
  const { data: enquiries = [], isLoading, refetch } = useGetEnquiries();
  const { mutate: updateStatus, isPending: isUpdating } =
    useUpdateEnquiryStatus();
  const { mutate: deleteEnq, isPending: isDeleting } = useDeleteEnquiry();
  const [actionId, setActionId] = useState<bigint | null>(null);

  const total = enquiries.length;
  const pending = enquiries.filter(
    (e: Enquiry) => e.status !== "responded",
  ).length;
  const responded = enquiries.filter(
    (e: Enquiry) => e.status === "responded",
  ).length;

  const handleUpdate = (id: bigint, status: string) => {
    setActionId(id);
    updateStatus({ id, status }, { onSettled: () => setActionId(null) });
  };

  const handleDelete = (id: bigint) => {
    if (!window.confirm("Delete this enquiry?")) return;
    setActionId(id);
    deleteEnq(id, { onSettled: () => setActionId(null) });
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            SoulBySeema — Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500">Manage enquiries and bookings</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            data-ocid="admin.secondary_button"
          >
            <RefreshCw size={14} className="mr-2" />
            Refresh
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goHome}
            data-ocid="admin.secondary_button"
          >
            ← Back to Site
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total Enquiries</p>
            <p className="text-3xl font-bold text-gray-900">{total}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
            <p className="text-sm text-amber-600 mb-1">Pending</p>
            <p className="text-3xl font-bold text-amber-600">{pending}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
            <p className="text-sm text-green-600 mb-1">Responded</p>
            <p className="text-3xl font-bold text-green-600">{responded}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div
              className="flex items-center justify-center py-20"
              data-ocid="admin.loading_state"
            >
              <Loader2 size={28} className="animate-spin text-gray-400" />
              <span className="ml-3 text-gray-500">Loading enquiries...</span>
            </div>
          ) : enquiries.length === 0 ? (
            <div className="text-center py-20" data-ocid="admin.empty_state">
              <p className="text-gray-400 text-lg">No enquiries yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table data-ocid="admin.table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enquiries.map((enq: Enquiry, idx: number) => (
                    <TableRow
                      key={String(enq.id)}
                      data-ocid={`admin.row.${idx + 1}`}
                    >
                      <TableCell className="text-gray-400 text-xs">
                        {idx + 1}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-sm text-gray-900">
                            {enq.name}
                          </p>
                          <p className="text-xs text-gray-500">{enq.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {enq.email}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {enq.country || "—"}
                      </TableCell>
                      <TableCell>
                        <span
                          className="text-xs text-gray-700 max-w-[140px] block truncate"
                          title={enq.service}
                        >
                          {enq.service || "—"}
                        </span>
                      </TableCell>
                      <TableCell className="text-xs text-gray-500">
                        {formatDate(enq.timestamp)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            enq.status === "responded"
                              ? "bg-green-100 text-green-700 hover:bg-green-100"
                              : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                          }
                        >
                          {enq.status === "responded" ? (
                            <>
                              <CheckCircle size={11} className="mr-1" />
                              Responded
                            </>
                          ) : (
                            <>
                              <Clock size={11} className="mr-1" />
                              Pending
                            </>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {(isUpdating || isDeleting) && actionId === enq.id ? (
                            <Loader2
                              size={14}
                              className="animate-spin text-gray-400"
                            />
                          ) : (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs h-7 px-2"
                                onClick={() =>
                                  handleUpdate(
                                    enq.id,
                                    enq.status === "responded"
                                      ? "pending"
                                      : "responded",
                                  )
                                }
                                data-ocid={`admin.edit_button.${idx + 1}`}
                              >
                                {enq.status === "responded"
                                  ? "Mark Pending"
                                  : "Mark Responded"}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs h-7 px-2 text-red-500 border-red-200 hover:bg-red-50"
                                onClick={() => handleDelete(enq.id)}
                                data-ocid={`admin.delete_button.${idx + 1}`}
                              >
                                <Trash2 size={12} />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(false);
  };

  if (authenticated) return <AdminDashboard />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl font-bold text-gray-900 mb-1">
            SoulBySeema
          </h1>
          <p className="text-sm text-gray-500">Admin Panel Access</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label
              htmlFor="admin-password"
              className="text-sm font-medium text-gray-700 block mb-1"
            >
              Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter admin password"
              autoComplete="current-password"
              data-ocid="admin.input"
            />
            {error && (
              <p
                className="text-red-500 text-xs mt-1"
                data-ocid="admin.error_state"
              >
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full"
            data-ocid="admin.submit_button"
          >
            Enter Admin
          </Button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-6">
          <a
            href="/"
            className="hover:text-gray-600 transition-colors"
            data-ocid="admin.link"
          >
            ← Return to SoulBySeema.com
          </a>
        </p>
      </div>
    </div>
  );
}
